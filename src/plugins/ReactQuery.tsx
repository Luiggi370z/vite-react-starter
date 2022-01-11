import { QueryCache, QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { IGenericError } from '@/models';

interface IReactQueryProps {
  children: React.ReactNode;
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // TODO: Add cache config
      refetchOnWindowFocus: false,
      retry: false,
      staleTime: 30000,
    },
  },
  queryCache: new QueryCache({
    onError: (error) => {
      if ((error as IGenericError)?.response?.status === 401) {
        return;
      }

      // TODO: add error logging with Server/Sentry
      console.error('Something went wrong on request', error);
    },
  }),
});

const ReactQuery: React.FC<IReactQueryProps> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default ReactQuery;
