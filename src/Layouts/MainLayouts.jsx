import React from 'react';
import Footer from './Footer';
import Header from './Header';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div className="App d-flex flex-column min-vh-100">
            <Header />
            <Sidebar />
            <main className="flex-grow-1">
               <Outlet/>
            </main>
            <Footer />
        </div>

    );
}
export default MainLayout;