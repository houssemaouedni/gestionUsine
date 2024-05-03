
import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import { useAuth } from './Configs/tokenExp';
import { Suspense, useState } from 'react';
import LoginPage from './Pages/LoginPage';
import Loader from './Common/Loader';
import Home from './Pages/HomePage/Home';


function App({ routes }) {
  const user = useAuth();
  
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        {routes.map((route, index) => {
          if (route.errorElement) {
            return <Route key={index} element={route.errorElement} />;
          } else {
            return (
              <Route
                key={index}
                path={route.path}
                element={user !== null ? <Home> {route.element} </Home>  : <LoginPage />}
              />
            );
          }
        })}
      </Routes>
    </Suspense>
  );
};

export default App
