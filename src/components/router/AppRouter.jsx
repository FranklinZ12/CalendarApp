import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Login from '../auth/Login'
import CalendarScreen from '../calendar/CalendarScreen'
import { startChecking } from '../../actions/auth'
import { PublicRoute } from './PublicRoute'
import { PrivateRoute } from './PrivateRoute'

const AppRouter = () => {
    const dispatch = useDispatch();
    const { checking, uid } = useSelector(state => state.auth);

    useEffect(() => {
        dispatch(startChecking());
    }, [dispatch])

    if (checking) {
        return <div>Checking...</div>
    }

    return (
        <BrowserRouter>
            <Routes>
                <Route
                    exact
                    path="/login"
                    element=
                    {
                        <PublicRoute uid={uid}>
                            <Login />
                        </PublicRoute>
                    }
                />

                <Route
                    exact
                    path="/"
                    element=
                    {
                        <PrivateRoute uid={uid}>
                            <CalendarScreen />
                        </PrivateRoute>
                    }
                />

                <Route path="/*" element=
                    {
                        <PrivateRoute uid={uid}>
                            <Navigate replace to="/*" />
                        </PrivateRoute>
                    }
                />
            </Routes>
        </BrowserRouter >
    )
}

export default AppRouter