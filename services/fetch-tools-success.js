import { FETCH_TOOLS_SUCCESS } from '../../constants/action-types';

export const fetchToolsSuccess = (toolsInfo) => (
  {
    type: FETCH_TOOLS_SUCCESS,
    payload: { toolsInfo },
  }
);
