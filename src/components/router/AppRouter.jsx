import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Login from '../auth/Login'
import CalendarScreen from '../calendar/CalendarScreen'
import { startChecking } from '../../actions/auth'

const AppRouter = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(startChecking());
    }, [dispatch])


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