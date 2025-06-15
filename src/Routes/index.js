import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from '../Layouts/MainLayouts'
import NotFoundPage from '../Pages/404';
import CourseList from '../Components/Course/CourseList';
import CourseDetail from '../Components/Course/CourseDetail';
import MyCoursesPage from '../Pages/MyCoursesPage';
import ProfilePage from '../Pages/ProfilePage';
import SettingsPage from '../Pages/SettingsPage';
import LogoutPage from '../Pages/LogoutPage';
import HomePage from '../Pages/HomePage';
import LoginPage from '../Pages/LoginPage';


const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route index element={<HomePage/>}></Route>
                <Route path="/courses/:id" element={<CourseDetail />} />
                <Route path="/my-courses" element={<MyCoursesPage />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/settings" element={<SettingsPage />} />
                <Route path="/logout" element={<LogoutPage />} />
                <Route path="/login" element={<LoginPage />} />

            </Route>
            <Route path="*" element={<NotFoundPage/>}></Route>
        </Routes>

    );
};
export default AppRoutes;