import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "../pages/common/NotFound";
import { PrivateRoute } from "./RouteAuth";
import NotAuthorized from "../pages/common/NotAuthorized";
import Login from "../pages/Login";
import Oee from "../pages/Oee";
import OperacaoDiaria from "../pages/OperacaoDiaria";

export const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/login" element={<Login />} />

                <Route path="/oee" element={<PrivateRoute permissions={['admin']} />}>
                    <Route index element={<Oee />} />
                </Route>

                <Route path="/operacao-diaria" element={<PrivateRoute permissions={['admin']} />}>
                    <Route index element={<OperacaoDiaria />} />
                </Route>

                <Route path='/not-authorized' element={<NotAuthorized />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}