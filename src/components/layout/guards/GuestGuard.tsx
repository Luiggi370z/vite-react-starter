import { FC, ReactElement } from 'react';

// Get authentication data from any source, in this case from context api, and check if user is authenticated
// and redirect to main page if not or show loading page if it is still loading.

// import { Navigate } from 'react-router-dom';

// import { LoadingPage } from '@/pages';
// import { AuthenticationContext } from '@/services/context';

interface IGuestGuardProps {
  children: ReactElement;
}

const GuestGuard: FC<IGuestGuardProps> = ({ children }) => {
  // const { isAuthenticated, isLoading } = useContext(AuthenticationContext);

  // if (isLoading) {
  //   return <LoadingPage />;
  // }

  // if (isAuthenticated) {
  //   return <Navigate to="/app/home" />;
  // }

  return children;
};

export default GuestGuard;
