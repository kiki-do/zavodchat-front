import ReactDOM from 'react-dom/client';
import { RouterProvider, createRouter } from '@tanstack/react-router';

import '@/shared/styles/globals.css';
import { routeTree } from '@/shared/router/route-tree.gen';
import { Providers, useAuth } from './app/providers';

const router = createRouter({
  routeTree,
  scrollRestorationBehavior: 'smooth',

  context: {
    auth: null!,
  },
});

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

const rootElement = document.getElementById('root');

function InnerApp() {
  const auth = useAuth();
  return <RouterProvider router={router} context={{ auth }} />;
}

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <Providers>
      <InnerApp />
    </Providers>
  );
}
