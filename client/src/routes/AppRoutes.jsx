import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Students from "../pages/Students";
import Attendance from "../pages/Attendance";
import Menu from "../pages/Menu";
import Complaints from "../pages/Complaints";
import Notices from "../pages/Notices";
import Contact from "../pages/Contact";


function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>

                <Route path="/" element={<Login />} />

                <Route path="/dashboard" element={<Dashboard />} />

                <Route path="/students" element={<Students />} />

                <Route path="/attendance" element={<Attendance />} />

                <Route path="/menu" element={<Menu />} />

                <Route path="/complaints" element={<Complaints />} />

                <Route path="/notices" element={<Notices />} />

                <Route path="/contact" element={<Contact />} />
                

            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;