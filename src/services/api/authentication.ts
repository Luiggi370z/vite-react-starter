import IApi from './base/api';
import { ApiCore } from './base/core';
// import apiProvider from './base/provider';

class AuthenticationApi extends ApiCore<unknown> implements Pick<IApi<unknown>, 'post'> {
  constructor() {
    super({
      methods: ['post'],
      url: 'login',
    });
  }

  // Add/extend custom methods here using te apiProvider
}

const authentication = new AuthenticationApi();

export default authentication;
