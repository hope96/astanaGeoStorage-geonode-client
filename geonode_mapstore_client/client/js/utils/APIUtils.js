/*
 * Copyright 2020, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

import url from 'url';
import queryString from "query-string";
import isEmpty from "lodash/isEmpty";

/**
* Utilities for api requests
* @module utils/APIUtils
*/

/**
* In development mode it returns the request with a relative path
* if the request url contain localhost:8000
* @param {string} requestUrl request url
* @return {string} correct url for localhost
*/
export const parseDevHostname = (requestUrl) => {
    if (__DEVTOOLS__ && requestUrl.indexOf('localhost') !== -1) {
        const parsedUrl = url.parse(requestUrl);
        return url.format({
            ...parsedUrl,
            hostname: null,
            host: null,
            protocol: null,
            port: null,
            href: null,
            slashes: null
        });
    }
    return requestUrl;
};

export const getApiToken = () => {
    /*
    In case of LOCKDOWN_MODE in geonode, we need to check if the search page
    contains an APIKEY. This is required because otherwise the endpoint
    will always raise an error due the missing auth. In this way if the
    main call provide an apikey, we can proceed with the login
    */
    const geoNodePageConfig = window.__GEONODE_CONFIG__ || {};
    return geoNodePageConfig.apikey || null;
};

/**
 * Params serializer to include/exclude square brackets
 * for params with array value
 * @param {Object} params
 * @returns {Object} updated params
 */
export const paramsSerializer = (params) => {
    const {include, exclude, ...rest} = params ?? {}; // Update bracket params (if any)
    let queryParams = '';
    if (!isEmpty(include) || !isEmpty(exclude)) {
        queryParams = queryString.stringify({include, exclude}, { arrayFormat: 'bracket'});
    }
    if (!isEmpty(rest)) {
        queryParams = (isEmpty(queryParams) ? '' : `${queryParams}&`) + queryString.stringify(rest);
    }
    return queryParams;
};

export default {
    parseDevHostname,
    paramsSerializer
};
