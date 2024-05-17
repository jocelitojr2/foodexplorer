import { BrowserRouter } from "react-router-dom";
import { useEffect } from "react";
import { useAuth } from "../hooks/auth"
import { USER_ROLE } from "../utils/roles.js"

import { AdminRoutes } from './admin.routes';
import { UserRoutes } from './user.routes';
import { AuthRoutes } from './auth.routes';

import { api } from "../services/api";

export function Routes() {
  const { user, userPermission, signOut } = useAuth();

  function AccessRoute() {
    switch(userPermission.role_id ) {
      case USER_ROLE.ADMIN:
        return <AdminRoutes />;
      case USER_ROLE.USER:
        return <UserRoutes />;
      default:
        return <UserRoutes />; 
    }
  }

  useEffect(() => {
    api
      .get('/users/validated')
      .catch((error) => {
        if(error.response?.status === 401) {
          signOut()
        }
      })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <BrowserRouter>
      { user ? <AccessRoute /> : <AuthRoutes />}
    </BrowserRouter>
  );
}