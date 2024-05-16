import { createContext, useContext, useState, useEffect } from 'react';

import { api } from "../services/api";

const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [data, setData] = useState({});

  async function signIn({ email, password }) {
    try {
      const response = await api.post("/sessions", { email, password });
      const { user, token, userPermission } = response.data;

      localStorage.setItem("@FoodExplorer:user", JSON.stringify({user, userPermission}));
      localStorage.setItem("@FoodExplorer:token", token);

      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      setData({ user, token, userPermission });

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
    localStorage.removeItem("@FoodExplorer:token");

    setData({});
  }

  useEffect(() => {
    const token = localStorage.getItem("@FoodExplorer:token");
    const userData = localStorage.getItem("@FoodExplorer:user");

    if( token && userData ) {
      const user = JSON.parse(userData);
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      setData({ 
        user: user.user,
        token, 
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