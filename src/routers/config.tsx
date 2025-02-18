import { HomePage } from '@/pages';
import { DefaultLayout } from '@/layouts/';

type Route = {
  path: string;
  roles: string[] | null;
  layout: React.ComponentType<{ children: React.ReactNode }> | null;
  element: JSX.Element;
};

export const publicRoutes: Route[] = [
  {
    path: '/',
    roles: null,
    layout: DefaultLayout,
    element: <HomePage />,
  },
];
