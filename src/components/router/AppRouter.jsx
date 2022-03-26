import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Login from '../auth/Login'
import CalendarScreen from '../calendar/CalendarScreen'

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element=
                    {
                        <Login />
                    }
                />

                <Route path="/" element=
                    {
                        <CalendarScreen />
                    }
                />
                <Route path="*" element=
                    {
                        <Navigate replace to="/" />
                    }
                />
            </Routes>
        </BrowserRouter >
    )
}

export default AppRouter