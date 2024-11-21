import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from './components/Home'
import TripsList from './components/TripsList'
import TripDetail from './components/TripDetail'
import Nav from './components/Nav';


import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/Nav",
    element: <Nav />,
  },
  {
    path: "/Home",
    element: <Home />,
  },
  {
    path: "/TripListHome",
    element: <TripsList />,
  },
  {
    path: "/TripDetail/:tripId",
    element: <TripDetail />,
  },
  {
    path: "/trips?",
    element: <TripsList />
  }
]);

ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  document.getElementById("root")
);

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
