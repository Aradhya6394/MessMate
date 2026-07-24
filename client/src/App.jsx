import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";

import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Students from "./pages/Students";
import Menu from "./pages/Menu";
import Complaints from "./pages/Complaints";
import Attendance from "./pages/Attendance";
import Notices from "./pages/Notices";
import Contact from "./pages/Contact";

function App() {
    return (
        <BrowserRouter>

            <Routes>

                {/* Authentication */}

                <Route path="/" element={<Login />} />

                <Route path="/login" element={<Login />} />

                <Route path="/register" element={<Register />} />

                {/* Application */}

                <Route path="/dashboard" element={<Dashboard />} />

                <Route path="/profile" element={<Profile />} />

                <Route path="/students" element={<Students />} />

                <Route path="/menu" element={<Menu />} />

                <Route path="/complaints" element={<Complaints />} />

                <Route path="/attendance" element={<Attendance />} />

                <Route path="/notices" element={<Notices />} />

                <Route path="/contact" element={<Contact />} />

            </Routes>

        </BrowserRouter>
    );
}

export default App;