import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import { Layout } from '../layout/Layout'
import TestTS from '../public/TestTS'
import Login from '../public/login/Login'

const Router = () => {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route element={<Layout />}>
                <Route path='/' element={<Login />} />
                <Route path='/test' element={<h1>asdasdasd</h1>} />
            </Route>
        )
    )


    return router
}

export default Router
