import { createBrowserRouter } from "react-router-dom";
import App from '../App'
import { Account, History, Home, Interest, Loan, Parson, Payment, Trash, UpdateAcc } from "../components";


export const router  = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/parson',
                element: <Parson />
            },
            {
                path: '/payment',
                element: <Payment />
            },
            {
                path: '/loan',
                element: <Loan />
            },
            {
                path: '/interest',
                element: <Interest />
            },
            {
                path: '/history',
                element: <History />
            },
            {
                path: '/account',
                element: <Account />
            },
            {
                path: '/trash',
                element: <Trash />
            },
            {
                path: '/update',
                element: <UpdateAcc />
            },
        ]
    }
])