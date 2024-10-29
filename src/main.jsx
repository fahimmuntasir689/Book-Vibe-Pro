import {  StrictMode } from 'react'
import { createRoot } from 'react-dom/client'


import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import BookDetails from './Components/BookDetails/BookDetails';
import ListedBooks from './Components/ListedBooks/ListedBooks';
import ErrorPage from './Components/ErrorElement/ErrorPage';
import Home from './Components/Home/Home';
import PagesToRead from './Components/PagesToRead/PagesToRead';
import Articles from './Articles/Articles';
import Contact from './Articles/Contact/Contact';
import Root from './Components/Root/Root'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,


    children: [
      {
        path: '/',
        element: <Home></Home>
      },

      {
        path: '/listedBooks',
        element: <ListedBooks></ListedBooks>,
        loader: () => fetch('/public/BookDetails.json')

      },
      {
        path: '/book/:id',
        element: <BookDetails></BookDetails>,
        loader: () => fetch('/public/BookDetails.json')
      },
      {
        path: '/pagestoread',
        element: <PagesToRead></PagesToRead>,
        loader: () => fetch('/public/BookDetails.json')

      },{
        path:'/articles',
        element:<Articles></Articles>
      },{
        path:'/contact',
        element:<Contact></Contact>
      }


    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
