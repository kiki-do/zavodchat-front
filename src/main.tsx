import ReactDOM from 'react-dom/client';
import { RouterProvider, createRouter } from '@tanstack/react-router';

import '@/shared/styles/globals.css';
import { routeTree } from '@/shared/router/route-tree.gen';
import { Providers } from './app/providers';

const router = createRouter({
  routeTree,
  defaultPreload: 'intent',
  scrollRestorationBehavior: 'smooth',
});

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

const rootElement = document.getElementById('root');

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <Providers>
      <RouterProvider router={router} />
    </Providers>
  );
}
