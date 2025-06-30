import { Navigate, Outlet } from "react-router-dom";
import NotAuthorized from "../pages/common/NotAuthorized";
import Layout from "../Layout";

interface PrivateRouteProps {
    permissions?: string[];
}

export const PrivateRoute: React.FC<PrivateRouteProps> = ({ permissions = ['*'] }) => {
    const isUserLoggedIn = true;
    const userRoles = ['admin']

    const hasPermission =
        permissions.includes('*') ||
        permissions.some((permission: string) => userRoles.includes(permission));

    return isUserLoggedIn ? (
        hasPermission ? (
            <Layout>
                <Outlet />
            </Layout>
        ) : (
            <NotAuthorized />
        )
    ) : (
        <Navigate to='/login' />
    );
}

export const PublicRoute: React.FC = () => {
    const isUserLoggedIn = true; // Replace with actual login check

    return isUserLoggedIn ? (
        <Layout>
            <Outlet />
        </Layout>
    ) : (
        <Navigate to='/login' />
    );
}


