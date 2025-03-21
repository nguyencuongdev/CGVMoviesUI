import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { routes } from './config';
import { useCallback, useEffect, useState } from 'react';

const AppRouter = () => {
  const [user, setUser] = useState({
    name: 'Cường',
    role: 'user',
  });

  const handleGenerateRoutes = useCallback(() => {
    return (
      <BrowserRouter>
        <Routes>
          {routes.map(({ path, layout: Layout, element, roles }) => {
            if (roles && !roles.includes(user.role)) return null;

            if (Layout) {
              return <Route key={path} path={path} element={<Layout>{element}</Layout>} />;
            }

            return <Route key={path} path={path} element={element} />;
          })}
          <Route path='*' element={<div>Not found</div>} />
        </Routes>
      </BrowserRouter>
    );
  }, [user]);

  // Render the routes with the provided layout
  return handleGenerateRoutes();
};

export default AppRouter;
