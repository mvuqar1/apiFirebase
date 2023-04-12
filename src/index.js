import React from 'react';
import ReactDOM from 'react-dom';


//sozdayem provayder dlya obertki
import { Provider } from 'react-redux';
import store from './Redux/store';

//sozdayem dlya perexod stranic ,a v st esli nado budet ispolz {NavLink, Outlet}
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Home from './Pages/Home';
import AddPage from './Pages/AddPage';
import EditPage from './Pages/EditPage';

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: '/home', element: <Home /> },
  { path: '/addPage', element: <AddPage /> },
  { path: '/editPage/:id', element: <EditPage /> }
])

ReactDOM.render(
  <Provider store={store}>

    <RouterProvider router={router} />

  </Provider>,
  document.getElementById('root')
);
