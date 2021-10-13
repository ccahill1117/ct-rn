import { FETCH_TOOLS_REQUEST } from '../../constants/action-types';

export const fetchToolsRequest = () => (
  {
    type: FETCH_TOOLS_REQUEST,
    payload: { isLoading: true },
  }
);
