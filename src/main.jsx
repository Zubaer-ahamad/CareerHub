import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './component/Root/Root.jsx';
import Home from './component/Home/Home.jsx';
import Statistics from './component/Statistics/Statistics.jsx';
import Applied from './component/Applied/Applied.jsx';
import Blog from './component/Blog/Blog.jsx';
import ShowDetail from './component/ShowDetail/ShowDetail.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'statistics',
        element: <Statistics></Statistics>
      },
      {
        path: 'applied',
        element: <Applied></Applied>,
        loader: () => fetch('../jobs.json')
      },
      {
        path: 'blog',
        element: <Blog></Blog>
      },
      {
        path: 'feature/:jobId',
        element: <ShowDetail></ShowDetail>,
        loader: () => fetch('../jobs.json')
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
