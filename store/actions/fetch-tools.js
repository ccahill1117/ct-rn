// @flow
import { fetchToolsData } from '../../services/http-requests';
import { fetchToolsError } from './fetch-tools-error';
import { fetchToolsRequest } from './fetch-tools-request';
import { fetchToolsSuccess } from './fetch-tools-success';

export const fetchTools = () => (
  (dispatch) => {
    dispatch(fetchToolsRequest());
    return fetchToolsData()
      .then((weatherInfo) => dispatch(fetchToolsSuccess(weatherInfo)))
      .catch(() => dispatch(fetchToolsError()));
  }
);
