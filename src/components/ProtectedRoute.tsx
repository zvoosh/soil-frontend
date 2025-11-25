// ProtectedRoute.tsx

import { Navigate, useLocation } from "react-router-dom";

interface ProtectedRouteProps {
  children: React.ReactNode;
  allowedRoles: string[];
  userRole: string;
}

export default function ProtectedRoute({
  children,
  allowedRoles,
  userRole,
}: ProtectedRouteProps) {
  const location = useLocation();

  if (!userRole) {
    // not logged in
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (!allowedRoles.includes(userRole)) {
    // wrong role
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
}