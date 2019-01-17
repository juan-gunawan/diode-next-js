import axios from "axios";

class DiodeDefaultNetworkLayer {
  _baseApiEndpoint;

  _defaultHeaders;

  // TODO accept fetch options
  constructor(baseApiEndpoint, options) {
    this._baseApiEndpoint = baseApiEndpoint;
    this._defaultHeaders = {
      Accept: "application/json",
      "Content-Type": "application/json"
    };
  }

  /**
   * @public
   *
   */
  sendQueries(queryRequests, options) {
    const requests = queryRequests.map(query => {
      /* istanbul ignore next */
      const headers = options.headers ? options.headers : this._defaultHeaders;
      const { url, method, payload } = query;
      const apiUrl = `${this._baseApiEndpoint}${url}`;
      const fetchParams = {
        url: apiUrl,
        method,
        headers: {
          ...headers,
          ...query.headers
        }
      };

      /* istanbul ignore else */
      if (typeof payload === "object") {
        // we use JSON.stringify here because this is what most POST request
        // body looked like. GET requests are usually in form of query string
        // which should already handled inside apiUrl. Other type of payload,
        // like urlencodedform should be generated inside query.generate method
        fetchParams.data = JSON.stringify(payload);
      } else if (typeof payload === "string") {
        fetchParams.data = payload;
      }

      return axios(fetchParams).then(response => {
        return {
          // ...response,
          type: query.type,
          data: response.data,
        };
      });
    });

    return Promise.all(requests).then(responses => {
      // Convert array of response into Map<QueryType, QueryResponse>
      const responseMap = responses.reduce((responseMap, response) => {
        const { type } = response;
        responseMap[type] = response;
        return responseMap;
      }, {});

      return responseMap;
    });
  }
}

// module.exports.default = DiodeDefaultNetworkLayer;
export default DiodeDefaultNetworkLayer;
