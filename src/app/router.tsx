import { createBrowserRouter } from 'react-router-dom';
import { RouteObject } from 'react-router-dom';
import { HomePage } from '@/pages/HomePage/ui/HomePage';
import { routePaths } from '@/shared/config/routing/routePaths';

export const routes: RouteObject[] = [
  {
    path: routePaths.home,
    element: <HomePage />,
  },
];

export const router = createBrowserRouter(routes);
