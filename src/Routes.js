import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { LoginRecovery } from "./components/LoginRecovery";

const FkRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/recovery-password" element={<LoginRecovery />} />
                <Route path="/home" element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
};

export default FkRoutes;
