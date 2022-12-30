import { useAuth } from "../../context/auth.context";

import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, onlyBusiness = false }) => {
  const { user } = useAuth();

  if (!user || (onlyBusiness && !user.biz)) {
    return <Navigate to="/sign-in" />;
  }

  return children;
};

export default ProtectedRoute;
