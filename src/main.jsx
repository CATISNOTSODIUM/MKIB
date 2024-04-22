import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
//import all pages 
import App from './App.jsx'
import TestArchive from './Pages/TestArchive.jsx'
import HallOfFame from './Pages/HallOfFame.jsx'
import About from './Pages/About.jsx';
import './index.css'

const router = createBrowserRouter([
  {
    path:".",
    element: <App/>
  },
  {
    path: "archive",
    element: <TestArchive />,
  },
  {
    path: "hall-of-Fame",
    element: <HallOfFame />,
  },
  {
    path: "about",
    element: <About />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
