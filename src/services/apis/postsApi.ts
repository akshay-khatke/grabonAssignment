
import { Request } from 'models';
import url from 'services/urls';


const postsApi = ({ get, post, put }: Request) => {
    //common controller
    const getPosts = (params?: any) =>
        get({ url: url.common.commonUrl.posts, params });
  return {
    getPosts
  };
};

export default postsApi;
