import {hashHistory} from 'react-router';

const getCurrentLocation = () => hashHistory.getCurrentLocation();

const mergeQueryParams = (params) => {
  const currentLocation = getCurrentLocation();
  currentLocation.query = {
    ...currentLocation.query,
    ...params
  };
  hashHistory.replace(currentLocation);
};


export default {
  mergeQueryParams,
  getCurrentLocation
};
