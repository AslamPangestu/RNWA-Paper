const getAccessToken = store => store.auth.accessToken;
const getError = store => store.auth.error;
const getIsLoading = store => store.auth.isLoading;

export default {
  getAccessToken,
  getError,
  getIsLoading
};
