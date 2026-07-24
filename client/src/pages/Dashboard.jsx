import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useAuth } from "../context/AuthContext";

import MainLayout from "../layouts/MainLayout";

import DashboardHeader from "../components/dashboard/DashboardHeader";
import StatCard from "../components/dashboard/StatCard";
import DashboardChart from "../components/dashboard/DashboardChart";
import TodayMenuCard from "../components/dashboard/TodayMenuCard";
import RecentNotices from "../components/dashboard/RecentNotices";
import RecentComplaints from "../components/dashboard/RecentComplaints";
import QuickActions from "../components/dashboard/QuickActions";
import ActivityTimeline from "../components/dashboard/ActivityTimeline";

import {
    FiUsers,
    FiCheckCircle,
    FiAlertCircle,
    FiCoffee,
} from "react-icons/fi";

import { getDashboard } from "../services/dashboardService";
import { getMenu } from "../services/menuService";
import { getNotices } from "../services/noticeService";
import { getComplaints } from "../services/complaintService";

function Dashboard() {
    const { user } = useAuth();

    const isAdmin = user?.role === "admin";

    const [dashboard, setDashboard] = useState(null);
    const [todayMenu, setTodayMenu] = useState(null);
    const [notices, setNotices] = useState([]);
    const [complaints, setComplaints] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchDashboard();
    }, []);

    const fetchDashboard = async () => {
        try {
            const dashboardData = await getDashboard();
            setDashboard(dashboardData);

            const menus = await getMenu();

            const today = new Date().toLocaleDateString("en-US", {
                weekday: "long",
            });

            const menu = menus.find(
                (item) => item.day === today
            );

            setTodayMenu(menu);

            const noticeData = await getNotices();
            setNotices(noticeData.slice(0, 5));

            const complaintData = await getComplaints();
            setComplaints(complaintData.slice(0, 5));

        } catch (error) {
            toast.error("Failed to load dashboard");
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return (
            <MainLayout>
                <div className="text-center py-20 text-2xl">
                    Loading Dashboard...
                </div>
            </MainLayout>
        );
    }

    return (
        <MainLayout>

            <DashboardHeader />
                {isAdmin && (

                    <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6">

                        <StatCard
                            title="Students"
                            value={dashboard.totalStudents}
                            subtitle="Registered Students"
                            icon={<FiUsers />}
                            color="#2563EB"
                            bgColor="#DBEAFE"
                        />

                        <StatCard
                            title="Attendance"
                            value={dashboard.todayAttendance}
                            subtitle="Today's Attendance"
                            icon={<FiCheckCircle />}
                            color="#16A34A"
                            bgColor="#DCFCE7"
                        />

                        <StatCard
                            title="Complaints"
                            value={dashboard.pendingComplaints}
                            subtitle="Pending Complaints"
                            icon={<FiAlertCircle />}
                            color="#DC2626"
                            bgColor="#FEE2E2"
                        />

                        <StatCard
                            title="Menus"
                            value={dashboard.totalMenus}
                            subtitle="Weekly Menu"
                            icon={<FiCoffee />}
                            color="#EA580C"
                            bgColor="#FFEDD5"
                        />

                    </div>
                )}

            {/* Chart + Today's Menu */}
            {isAdmin ? (

                    <div className="grid lg:grid-cols-3 gap-6 mt-10">

                        <div className="lg:col-span-2">
                            <DashboardChart dashboard={dashboard} />
                        </div>

                        <TodayMenuCard menu={todayMenu} />

                    </div>
            ):(
                <div className="mt-10">
                    <TodayMenuCard menu={todayMenu} />
                </div>
            )}

            {/* Notices + Complaints */}

            {isAdmin ? (

                <div className="grid lg:grid-cols-2 gap-6 mt-10">

                    <RecentNotices notices={notices} />

                    <RecentComplaints complaints={complaints} />

                </div>

            ) : (

                <div className="mt-10">

                    <RecentNotices notices={notices} />

                </div>

            )}

            {/* Quick Actions */}

            {isAdmin && (
                <div className="mt-10">
                    <QuickActions />
                </div>
            )}

            {/* Activity Timeline */}

            {isAdmin && (
                <div className="mt-10">
                     <ActivityTimeline />
                </div>
            )}

        </MainLayout>
    );
}

export default Dashboard;