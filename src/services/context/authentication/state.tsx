import { useMemo, useReducer } from 'react';
import AuthenticationContext from './context';
import authenticationReducer, { ActionTypes, IState, initialState } from './reducer';
// import * as types from './types';

interface IAuthenticationStateProps {
  children: React.ReactNode;
}

const AuthenticationState: React.FC<IAuthenticationStateProps> = ({ children }) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [state, dispatch] = useReducer<React.Reducer<IState, ActionTypes>>(
    authenticationReducer,
    initialState,
  );

  // Could use a hook to handle the login process using react query
  // const loginMutation = useLogin();

  // const login = useCallback(
  //   async (credentials) => {
  //     await loginMutation.mutateAsync(credentials);
  //   },
  //   [loginMutation],
  // );

  // useEffect(() => {
  //   if (loginMutation.status === 'success') {
  //     dispatch({ type: types.UPDATE_IS_AUTHENTICATED, payload: { isAuthenticated: true } });
  //   } else if (loginMutation.status === 'error') {
  //     const { response } = loginMutation.error || {};

  //     if (response?.data?.errors) {
  //       // Dispatch any custom action to handle known errors
  //     } else {
  //       // Send a global error  in a toast
  //     }
  //   }
  // }, [loginMutation.error, loginMutation.status]);

  const contextProps = useMemo(
    () => ({
      ...state,
      // logout,
      // login,
    }),
    [
      state,
      // logout,
      // login,
    ],
  );

  return (
    <AuthenticationContext.Provider value={contextProps}>{children}</AuthenticationContext.Provider>
  );
};

export default AuthenticationState;
