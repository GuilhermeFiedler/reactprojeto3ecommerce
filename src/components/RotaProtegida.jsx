import { useLocation, Navigate } from "react-router-dom";
import useAuth from "../hook/useAuth";

export default function({ children }) {
    const { isAuthenticated, loading } = useAuth();
    const location = useLocation();

    if(loading) return <a>carregando...</a>

    if (!isAuthenticated) {
        return <Navigate to="/login" state={{ from: location }} replace />
    }

    return children;
}