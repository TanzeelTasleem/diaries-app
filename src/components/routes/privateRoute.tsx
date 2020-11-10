import React from "react";
import { Navigate } from "react-router-dom";
const PrivateRoute: React.FC<any> = ({
    component: Component,
    isAuthenticated,
    ...rest
  }) => (isAuthenticated ? <Component {...rest} /> : <Navigate to="/login" />);
  
  