import { createBrowserRouter } from 'react-router-dom';
import { Home, Master, EstudioWall, Metromall, EstudioVirtual } from '../pages';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/Master',
    element: <Master />,
  },
  {
    path: '/Estudio-Wall',
    element: <EstudioWall />,
  },
  {
    path: '/Estudio-Virtual',
    element: <EstudioVirtual />,
  },
  {
    path: '/Metromall',
    element: <Metromall />,
  },
]);
