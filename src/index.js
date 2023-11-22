import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

import App from './App';
import About from './component/About'
import Error from './component/Error'
import Body from './component/Body';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));

const appRouter = createBrowserRouter([
  {
    path:"/",
    element: <App />,
    children:[
      {
        path:"/",
        element: <Body />,
      },
      {
        path:"/about",
        element: <About />,
      },
    ],
    errorElement: <Error />,
  },
  
])

root.render(
  <RouterProvider router={appRouter} />
);
