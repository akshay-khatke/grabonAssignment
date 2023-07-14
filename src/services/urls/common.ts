

const commonController = () => {
  const getCommonUrl = (url: string) => `${url}`;

  const commonUrl = {
    posts: getCommonUrl(`posts`),
  };

  return {
    commonUrl,
  };
};

export default commonController;
