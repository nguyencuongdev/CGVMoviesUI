import { HomePage } from '@/pages';

type Route = {
  path: string;
  roles: string[] | null;
  layout: React.ComponentType<{ children?: React.ReactNode }> | null;
  element: JSX.Element;
};

export const publicRoutes: Route[] = [
  {
    path: '/',
    roles: ['admin'],
    layout: null,
    element: <HomePage />,
  },
];
