

import commonController from "services/urls/common";

const url = {
  common: commonController(),
};

const LOCAL = false;
const BASE_URL = __DEV__
  ? !LOCAL
    ? {
      // Development
      POSTS: 'https://jsonplaceholder.typicode.com/',
    }
    : {
      // local
      POSTS: 'https://jsonplaceholder.typicode.com/',
    }
  : {
    // Production
    POSTS: 'https://jsonplaceholder.typicode.com/',

  };

export { BASE_URL };

export default url;
