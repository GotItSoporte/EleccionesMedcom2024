import { createBrowserRouter } from 'react-router-dom';
import { Home, Operador, Presentador, Metromall, Follower } from '../pages';

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
    path: '/Metromall',
    element: <Metromall />,
  },
  {
    path: '/Follower',
    element: <Follower />,
  },
]);
