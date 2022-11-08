import { Routes, Route, Navigate } from "react-router-dom"

import Login from "../pages/Login"
import Register from "../pages/Register"

const RoutesMain = () => {
    return (
        <Routes>
            <Route path="register" element={<Register/>}/>
            <Route path="login" element={<Login/>}/>
            <Route path="*" element={<Navigate to="/login" replace/>}/>
        </Routes>
    )
}

export default RoutesMain