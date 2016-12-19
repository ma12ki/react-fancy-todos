import {hashHistory} from 'react-router';

const mergeQueryParams = (params) => {
    const currentLocation = hashHistory.getCurrentLocation();
    currentLocation.query = {
        ...currentLocation.query,
        ...params
    };
    hashHistory.replace(currentLocation);
};

export default {
    mergeQueryParams
};
