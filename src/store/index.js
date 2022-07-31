import { createStore } from 'vuex';
import users from './modules/users';
import starredRepo from './modules/starredRepo';

export default createStore({
  modules:{
    users,
    starredRepo
  }
});