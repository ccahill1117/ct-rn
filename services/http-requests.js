import config from '../lib/config';
// import { ApiUtilities } from '../constants/ApiUtilities'

export const fetchToolsData = () => (

  fetch(config.API_URL)
    .then((res) => res.json())
    .then((data) => data.currently)
    .catch((err) => err)

);
