import { createBrowserRouter } from 'react-router-dom';
import { Home, Master, Wall, SetRegiones, Follower } from '../pages';

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
    path: '/Wall',
    element: <Wall />,
  },
  {
    path: '/Follower',
    element: <Follower />,
  },
  {
    path: '/SetRegiones',
    element: <SetRegiones />,
  },
]);
