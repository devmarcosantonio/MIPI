import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "../pages/NotFound";
import { PrivateRoute } from "./RouteAuth";
import NotAuthorized from "../pages/NotAuthorized";
import Login from "../pages/Login";
import OEE from "../pages/OEE";

export const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/login" element={<Login />} />

                <Route path="/OEE" element={<PrivateRoute permissions={['admin']} />}>
                    <Route index element={<OEE />} />
                </Route>

                <Route path='/not-authorized' element={<NotAuthorized />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}