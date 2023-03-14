import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Helmet } from 'react-helmet';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/index';
import ProductPage from './pages/product';
import ProductDetailsPage from './pages/product/[productId]';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 3000,
    },
  },
});

const router = createBrowserRouter([
  {
    index: true,
    element: <HomePage />,
  },
  {
    path: 'product',
    element: <ProductPage />,
  },
  {
    path: 'product/:productId',
    element: <ProductDetailsPage />,
  },
]);

export const ReactApp = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Helmet titleTemplate="%s - SPA Demo" defaultTitle="SPA Demo" />
      <div className="max-w-4xl mx-auto p-6">
        <RouterProvider router={router} />
      </div>
    </QueryClientProvider>
  );
};
