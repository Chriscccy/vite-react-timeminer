import { ReactNode, useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface AuthRouteProps {
  children: ReactNode;
}

export function AuthRoute({ children }: AuthRouteProps) {
  const token = true;
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token, navigate]);

  return <>{children}</>;
}

export default AuthRoute;
