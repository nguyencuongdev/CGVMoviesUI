import {
  HomePage,
  MovieDetail,
  MovieNowShowing,
  MovieCommingSoon,
  AuthPage,
  SitesPage,
  MoviesOfSitePage,
} from '@/pages';
import { DefaultLayout, AuthLayout } from '@/layouts/';

type Route = {
  path: string;
  roles: string[] | null;
  layout: React.ComponentType<{ children: React.ReactNode }> | null;
  element: JSX.Element;
};

export const routes: Route[] = [
  {
    path: '/',
    roles: null,
    layout: DefaultLayout,
    element: <HomePage />,
  },
  {
    path: '/movies/details',
    roles: null,
    layout: DefaultLayout,
    element: <MovieDetail />,
  },
  {
    path: '/movies/now-showing',
    roles: null,
    layout: DefaultLayout,
    element: <MovieNowShowing />,
  },
  {
    path: '/movies/comming-soon',
    roles: null,
    layout: DefaultLayout,
    element: <MovieCommingSoon />,
  },
  {
    path: '/login',
    roles: null,
    layout: AuthLayout,
    element: <AuthPage />,
  },
  {
    path: '/register',
    roles: null,
    layout: AuthLayout,
    element: <AuthPage />,
  },
  {
    path: '/sites',
    roles: null,
    layout: DefaultLayout,
    element: <SitesPage />,
  },
  {
    path: '/sites/:id',
    roles: null,
    layout: DefaultLayout,
    element: <MoviesOfSitePage />,
  },
];
