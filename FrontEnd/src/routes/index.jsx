import { createBrowserRouter } from 'react-router-dom';
import { Home, Operador, Programador } from '../pages';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/Operador',
    element: <Operador />,
  },
  {
    path: '/Programador',
    element: <Programador />,
  },
]);
