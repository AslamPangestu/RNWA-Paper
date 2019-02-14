import { SET_AUTH_PROP, SET_AUTH_ERROR } from "./types";

type State = {
  isLoading: boolean,
  error: string,
  userId: string,
  username: string,
  userStatus: string,
  accessToken: string
};

const initialState: State = {
  isLoading: false,
  error: undefined,
  userId: undefined,
  username: undefined,
  userStatus: undefined,
  accessToken: undefined
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH_PROP: {
      return Object.assign({}, state, { error: undefined, ...action.payload });
    }
    case SET_AUTH_ERROR: {
      return Object.assign({}, initialState, action.payload);
    }
    default: {
      return state;
    }
  }
};
