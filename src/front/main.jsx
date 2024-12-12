import React from 'react';
import ReactDOM from 'react-dom/client';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App.jsx';

// Components
import CustomersRow from './Components/CustomersRow';
import LoginForm from './Components/LoginForm';
import Navbar from './Components/Navbar';
import NavItem from './Components/NavItem';
import PrivateRoute from './Components/PrivateRoute';
import Recuperar from './Components/Recuperar';
import RegisterForm from './Components/RegisterForm';
import Reports from './Components/Reports';
import SalesCard from './Components/SalesCard';
import ToppRow from './Components/ToppRow';

// Screens
import Customerview from './Screens/SubScreens/Customerview';
import Homeview from './Screens/SubScreens/Homeview';
import Inventoryview from './Screens/SubScreens/Inventoryview';
import Orderviews from './Screens/SubScreens/Orderviews';
import Reportsview from './Screens/SubScreens/Reportsview';
import Dashboard from './Screens/Dashboard';
import FullFormsPage from './Screens/FullFormsPage';

const router = createHashRouter([
  { path: '/', element: <App /> },
  { path: '/about', element: <div>About</div> },
  { path: '/contact', element: <div>Contact</div> },
  { path: '/login', element: <FullFormsPage formType="login" /> },
  { path: '/register', element: <FullFormsPage formType="register" /> },
  { path: '/recuperar', element: <FullFormsPage formType="recuperar" /> },
  { path: '/menu', element: <PrivateRoute><Dashboard rightType="home" /></PrivateRoute> },
  { path: '/menu/clientes', element: <PrivateRoute><Dashboard rightType="clientes" /></PrivateRoute> },
  { path: '/menu/ordenes', element: <PrivateRoute><Dashboard rightType="ordenes" /></PrivateRoute> },
  { path: '/menu/inventario', element: <PrivateRoute><Dashboard rightType="inventario" /></PrivateRoute> },
  { path: '/menu/informes', element: <PrivateRoute><Dashboard rightType="informes" /></PrivateRoute> }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
