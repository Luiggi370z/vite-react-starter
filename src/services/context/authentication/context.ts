import { createContext } from 'react';

export interface IAuthenticationContext {
  isAuthenticated: boolean;
}

const initialAuthContext = {
  isAuthenticated: false,
  // Context could manage the login and logout process
  // logout: () => {},
  // login: () => {
  //   return Promise.resolve();
  // },
};

const AuthenticationContext = createContext<IAuthenticationContext>(initialAuthContext);

export default AuthenticationContext;
