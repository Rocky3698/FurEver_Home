import React from 'react';
import ReactDOM from 'react-dom/client';
import './tailwind.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import PageNotFound from './Components/Errors/PageNotFound';
import Root from './Components/Root/Root';
import Home from './Components/Root/Home/Home';
import Auth from './Components/Auth/Auth';
import Adopter_Home from './Components/Adopter/Home/Adopter_Home';
import Pets from './Components/Pets/Pets';
import Petdetails from './Components/Pets/Petdetails';
import Profile from './Components/Profile/Profile';
import Shelter_Home from './Components/Shelter/Home/Shelter_Home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <PageNotFound />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
    ],
  },
  {
    path: '/registration',
    element: <Auth />,
    errorElement: <PageNotFound />,
  },
  {
    path: '/adopter',
    element: <Adopter_Home />,
    errorElement: <PageNotFound />,
    children: [
      {
        path: '',
        element: <Pets />,
      },
      {
        path: 'pets/:id', 
        element: <Petdetails />,
      },
    ],
  },
  {
    path: '/shelter',
    element: <Shelter_Home></Shelter_Home>,
    errorElement: <PageNotFound />,
    children: [
      {
        path: '',
        element: <Pets />,
      },
      {
        path: 'pets/:id', 
        element: <Petdetails />,
      },
    ],
  },
  {
    path : '/adopter/profile',
    element: <Profile></Profile>,
  },
  {
    path : '/shelter/profile',
    element: <Profile></Profile>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
