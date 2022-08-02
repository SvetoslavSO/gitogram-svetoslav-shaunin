import { createStore } from 'vuex';
import users from './modules/users';
import starredRepo from './modules/starredRepo';
import authUser from './modules/authUser'

export default createStore({
  modules:{
    users,
    starredRepo,
    authUser
  }
});