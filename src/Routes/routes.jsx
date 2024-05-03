import { lazy } from "react";
import {  Route, useRouteError } from "react-router-dom";
import Dashboard from "../Pages/Dashboard.jsx";
import { useAuth } from "../Configs/tokenExp.jsx";


const LoginPage = lazy(() => import('../Pages/LoginPage.jsx'));

function ErrorBoundary() {
  const error = useRouteError();
  return <div>{error.data}</div>;
}
export const routes = [
  {
    errorElement: <ErrorBoundary />,
  },
  {
    path: '/login',
    element: <LoginPage />
  },
  {
    path: '/',
    element: <LoginPage />
  },
  {
    path: '/dashboard',
    element: <Dashboard /> 
  },
];
