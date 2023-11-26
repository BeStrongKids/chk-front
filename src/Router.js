import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage';
import RecruitListPage from './pages/RecruitListPage/RecruitListPage';
import JoinPage from './pages/JoinPage/JoinPage';
import LoginPage from './pages/LoginPage/LoginPage';
import MyPage from './pages/MyPage/MyPage';
import FavoritePage from './pages/FavoritePage/FavoritePage';
import Layout from './Components/Layout/Layout';

export default function Router() {
    return (
        <BrowserRouter>
            {/* <nav>
                <NavLink className={({ isActive }) => "nav-link" + (isActive ? " click" : "")} to='/'>
                    Start
                </NavLink>
                <NavLink className={({ isActive }) => "nav-link" + (isActive ? " click" : "")} to='/about'>
                    About
                </NavLink>
                <NavLink className={({ isActive }) => "nav-link" + (isActive ? " click" : "")} to='/contact'>
                    Contact
                </NavLink>
            </nav> */}
            <Routes>
                <Route path='/' element={<Layout />}>    
                    <Route path='/' element={<MainPage />} />
                    <Route path='/login' element={<LoginPage />} />
                    <Route path='/join' element={<JoinPage />} />
                    <Route path='/recruit' element={<RecruitListPage />} />
                    <Route path='/myPage' element={<MyPage />} />
                    <Route path='/favorite' element={<FavoritePage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}