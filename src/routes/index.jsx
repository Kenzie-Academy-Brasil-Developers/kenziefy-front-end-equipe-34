import { Routes, Route, Navigate } from "react-router-dom"
import Dashboard from "../pages/Dashboard"

import Login from "../pages/Login"
import Register from "../pages/Register"

const RoutesMain = () => {
    return (
        <Routes>
            <Route path="register" element={<Register/>}/>
            <Route path="login" element={<Login/>}/>
            <Route path="*" element={<Navigate to="/login" replace/>}/>
            <Route path="/dashboard" element={<Dashboard/>}/>
        </Routes>
    )
}

export default RoutesMain