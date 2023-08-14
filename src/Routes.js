import { BrowserRouter, Routes, Route } from "react-router-dom";

import { PrivateRoute } from "./components/PrivateRoute/PrivateRoute";
import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { LoginRecovery } from "./components/LoginRecovery";
import { Register } from "./components/Register";

const FkRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/recovery-password" element={<LoginRecovery />} />
                <Route path="/create-account" element={<Register />} />
                <Route
                    path="/home"
                    element={
                        <PrivateRoute>
                            <Home />
                        </PrivateRoute>
                    }
                />
            </Routes>
        </BrowserRouter>
    );
};

export default FkRoutes;
