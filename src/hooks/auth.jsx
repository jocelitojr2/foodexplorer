import { createContext, useContext, useState, useEffect } from 'react';

import { api } from "../services/api";

const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [data, setData] = useState({});

  async function signIn({ email, password }) {
    try {
      const response = await api.post(
        "/sessions", 
        { email, password }, 
        { withCredentials: true }
      );
      const { user, userPermission } = response.data;

      localStorage.setItem("@FoodExplorer:user", JSON.stringify({user, userPermission}));

      setData({ user, userPermission });

    } catch(error) {
      if(error.response) {
        alert(error.response.data.message);
      } else {
        alert("Não foi possível entrar.");
      }
    }
  }

  function signOut() {
    localStorage.removeItem("@FoodExplorer:user");

    setData({});
  }

  useEffect(() => {
    const userData = localStorage.getItem("@FoodExplorer:user");

    if( userData ) {
      const user = JSON.parse(userData);
      setData({ 
        user: user.user,
        userPermission: user.userPermission
      });
    }

  }, []);

  return (
    <AuthContext.Provider value={{ 
      signIn, 
      signOut,
      user: data.user,
      userPermission: data.userPermission
    }}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth() {
  const context = useContext(AuthContext);
  return context;
}

// eslint-disable-next-line react-refresh/only-export-components
export { AuthProvider, useAuth };