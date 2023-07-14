import { postsApi } from 'services/apis';
import createAxios from 'services/axios';
import { BASE_URL } from 'services/urls';

const { instance: postsInsatnce, ...posts } = createAxios(BASE_URL.POSTS);

const api = {
  posts: postsApi(posts),
};



export default api;
