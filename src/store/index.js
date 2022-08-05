import { createStore } from 'vuex';
import users from './modules/users';
import starredRepo from './modules/starredRepo';
import authUser from './modules/authUser';
import followings from './modules/followings';
import userRepos from './modules/userRepos';

export default createStore({
  modules:{
    users,
    starredRepo,
    authUser,
    followings,
    userRepos
  }
});