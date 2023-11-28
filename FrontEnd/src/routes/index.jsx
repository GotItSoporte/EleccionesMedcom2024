import { createBrowserRouter } from 'react-router-dom';
import { Home, Operador, Presentador, Programador } from '../pages';

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
    path: '/Presentador',
    element: <Presentador />,
  },
  {
    path: '/Programador',
    element: <Programador />,
  },
]);
