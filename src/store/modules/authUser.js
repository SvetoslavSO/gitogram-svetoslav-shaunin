import * as api from '../../api'

export default 
{
  namespaced: true,
  state: {
    data: {
      username: '',
      userAvatar: ''
    }
  },
  mutations:{
    SET_USER : (state, data) => {
      state.data = {
        username: data.login,
        userAvatar: data.avatar_url
      }
    }
  },
  actions: {
    async getUser ({ commit }) {
      try {
        const { data } = await api.authUser.getAuthUser()
        console.log(data)
        commit('SET_USER', data)
      } catch (e) {
        console.log(e)
      }
    },
    async logout () {
      localStorage.removeItem('token');
      window.location.reload();
    }
  }
}