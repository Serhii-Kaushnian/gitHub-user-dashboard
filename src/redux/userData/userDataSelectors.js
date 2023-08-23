export const getUserData = (state) => state.userData;
export const getUser = (state) => state.userData.user;
export const getUserFollowers = (state) => state.userData.userFollowers;
export const getUserRepos = (state) => state.userData.userRepos;
export const isLoading = (state) => state.userData.isLoading;
export const isLoadingFollowers = (state) => state.userData.isLoadingFollowers;
export const isLoadingRepos = (state) => state.userData.isLoadingRepos;
export const isError = (state) => state.userData.error;
