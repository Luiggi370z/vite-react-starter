// import { lazy } from 'react';
import { Navigate, RouteObject } from 'react-router-dom';

// Layouts and guards should be loaded from the beginning, so we can use them in the
// routes definitions
import { AuthGuard, GuestGuard } from '@/components/layout/guards';
import PublicLayout from '@/components/layout/Public';
import PrivateLayout from '@/components/layout/Private';

// Load your public and private pages here using lazy loading.
// const NotFoundPage = lazy(() => import('@/pages/public/NotFound'));
// const LoginPage = lazy(() => import('@/pages/public/Login'));

// const HomePage = lazy(() => import('@/pages/private/Home'));

const routes: RouteObject[] = [
  {
    path: '/',
    element: (
      <GuestGuard>
        <PublicLayout />
      </GuestGuard>
    ),
    children: [
      {
        index: true,
        path: 'login',
        // element: <LoginPage />,
      },
      // Examples:
      // {
      //   path: 'forgot-password',
      //   element: <ForgotPasswordPage />,
      // },
      // {
      //   path: 'reset-password',
      //   element: <ResetPasswordPage />,
      // },
      // {
      //   path: 'signup',
      //   element: <SignupPage />,
      // },
    ],
  },
  {
    path: 'dashboard',
    element: (
      <AuthGuard>
        <PrivateLayout />
      </AuthGuard>
    ),
    children: [
      {
        index: true,
        path: 'home',
        // element: <HomePage />,
      },
      // Examples for admin only
      // {
      //   path: 'my/path',
      //   element: (
      //     <AdminGuard>
      //       <AdminOnlyPage />
      //     </AdminGuard>
      //   ),
      // },
    ],
  },
  {
    path: '404',
    element: <PublicLayout />,
    children: [
      {
        index: true,
        // element: <NotFoundPage />,
      },
    ],
  },
  {
    path: '*',
    element: <PublicLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="app" />,
      },
      {
        path: '*',
        element: <Navigate to="404" />,
      },
    ],
  },
];

export default routes;
