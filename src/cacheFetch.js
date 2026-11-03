/* eslint-disable no-underscore-dangle, jsdoc/no-undefined-types, jsdoc/require-param-description */

const _fetchMap = new Map();

/**
 * Called when the response arrives, to read its body.
 *
 * @callback ResponseParser
 * @param {Response} response - The response to read.
 * @returns {Promise<*>} The parsed body.
 */

/**
 * Fetches a URL and shares the result with every later call for the same URL, so it requests each URL only once.
 * Results stay cached until the page reloads, including failed requests.
 *
 * @param {string} uri - The URL to fetch.
 * @param {{ responseParser?: ResponseParser }} [options] - The options for reading the response. Set `responseParser` to read the body another way; by default, `cacheFetch` reads it as text. Only the first call for a URL uses its `responseParser`, because later calls share that call's result.
 * @returns {Promise<*>} The parsed response body, shared by every call for the same URL.
 */
const cacheFetch = (uri, options = {}) => {
  const responseParser =
    options.responseParser || ((response) => response.text());
  if (!_fetchMap.has(uri)) {
    _fetchMap.set(uri, fetch(uri).then(responseParser));
  }
  return _fetchMap.get(uri);
};

export default cacheFetch;
