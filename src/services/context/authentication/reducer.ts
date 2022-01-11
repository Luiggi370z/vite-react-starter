import * as types from './types';

export interface IState {
  isAuthenticated: boolean;
  // Coudl have more props
}

type Type = typeof types.UPDATE_IS_AUTHENTICATED;

interface IAction {
  type: Type;
}

interface IActionUpdateAuthenticated extends IAction {
  payload: { isAuthenticated: boolean };
}

export type ActionTypes = IAction | IActionUpdateAuthenticated;

export const initialState = {
  isAuthenticated: false,
};

// eslint-disable-next-line default-param-last
const reducer = (state: IState = initialState, action: ActionTypes) => {
  switch (action.type) {
    case types.UPDATE_IS_AUTHENTICATED: {
      const { payload } = action as IActionUpdateAuthenticated;

      return {
        ...state,
        isAuthenticated: payload.isAuthenticated,
      };
    }

    default:
      return state;
  }
};

export default reducer;
