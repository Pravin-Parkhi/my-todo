import ActionTypes from '../action-types/index'

import { DARK_THEME, LIGHT_THEME } from '../constants/variables.constant'

const defaultState = {
  appTheme: DARK_THEME,
  todoList: []
};

const appReducer = (state = defaultState, action) => {
  switch (action.type) {
    
    case ActionTypes.SET_APP_THEME: {
      return {
        ...state,
        appTheme: state.appTheme === DARK_THEME 
          ? LIGHT_THEME 
            : DARK_THEME
      }
    }

    default:
      return state
  }
};

export default appReducer;