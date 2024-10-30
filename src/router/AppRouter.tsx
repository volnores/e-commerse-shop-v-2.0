import { createBrowserRouter } from 'react-router-dom';
import Layout from '../layouts/index';
import Home from '../pages/Home';
import About from '../pages/About';
import Cart from '../pages/Cart';
import ProductIdPage from '../components/productIdPage/ProductIdPage/index';
import Catalog from '../pages/Catalog';

export const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <div>error</div>,
    children: [
      { path: '/', element: <Home /> },
      { path: '/about', element: <About /> },
      { path: '/cart', element: <Cart /> },
      { path: '/products', element: <Catalog /> },
      { path: '/products/:id', element: <ProductIdPage /> },
    ],
  },
]);
