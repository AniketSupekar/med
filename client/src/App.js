import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

/** import all components */
import Username from './components/Username';
import Password from './components/Password';
import Register from './components/Register';
import Profile from './components/Profile';
import Recovery from './components/Recovery';
import Reset from './components/Reset';
import PageNotFound from './components/PageNotFound';
import AddPatient from './components/AddPatient';
import Personal_Information_form from './components/PersonalInfo';
import Blood_Test_form from './components/BTForm';
import X_Ray_form from './components/XRayForm';

/** auth middleware */
import { AuthorizeUser, ProtectRoute } from './middleware/auth'

/** root routes */
const router = createBrowserRouter([
    {
        path : '/',
        element : <Username></Username>
    },
    {
        path : '/register',
        element : <Register></Register>
    },
    {
        path : '/password',
        element : <ProtectRoute><Password /></ProtectRoute>
    },
    {
        path : '/profile',
        element : <AuthorizeUser><Profile /></AuthorizeUser>
    },
    {
        path : '/recovery',
        element : <Recovery></Recovery>
    },
    {
        path : '/reset',
        element : <Reset></Reset>
    },
    {
        path : '/AddPatient',
        element : <AddPatient></AddPatient>
    },
    {
        path : '/Personal_Information_form',
        element : <Personal_Information_form></Personal_Information_form>
    },
    {
        path : '/Blood_Test_form',
        element : <Blood_Test_form></Blood_Test_form>
    },
    {
        path : '/X_Ray_form',
        element : <X_Ray_form></X_Ray_form>
    },
    {
        path : '*',
        element : <PageNotFound></PageNotFound>
    },
])

export default function App() {
  return (
    <main>
        <RouterProvider router={router}></RouterProvider>
    </main>
  )
}
