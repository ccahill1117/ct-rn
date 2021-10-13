import { FETCH_TOOLS_ERROR } from '../../constants/action-types';

export const fetchToolsError = () => (
  {
    type: FETCH_TOOLS_ERROR,
    payload: { error: true },
  }
);
