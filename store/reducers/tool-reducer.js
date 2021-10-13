import {
  FETCH_TOOLS_ERROR,
  FETCH_TOOLS_REQUEST,
  FETCH_TOOLS_SUCCESS,
} from '../../constants/action-types';

const initialState = {
  toolsInfo: {},
  isLoading: false,
  error: false,
};

export const getToolsSelector = (state) => ({ ...state.tools });

const toolsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TOOLS_SUCCESS: {
      return {
        isLoading: false,
        error: false,
        toolsInfo: action.payload.toolsInfo,
      };
    }
    case FETCH_TOOLS_REQUEST: {
      return {
        isLoading: true,
        error: false,
        toolsInfo: {},
      };
    }
    case FETCH_TOOLS_ERROR: {
      return {
        ...state,
        isLoading: false,
        error: true,
      };
    }
    default: {
      return state;
    }
  }
};

export default toolsReducer;
