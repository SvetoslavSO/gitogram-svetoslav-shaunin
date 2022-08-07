import * as api from '../../api'

export default 
{
  namespaced: true,
  state: {
    data: {
      username: '',
      userAvatar: '',
      userNumberOfRepos:'',
      company: '',
      following: 0
    }
  },
  mutations:{
    SET_USER : (state, data) => {
      state.data = {
        username: data.login,
        userAvatar: data.avatar_url,
        userNumberOfRepos: data.public_repos,
        company: data.company,
        following: data.following,
        status: true
      }
    },
    SET_STATUS: (state, data) => {
      if (data === true) {
        state.data.status = false
      } else {
        state.data.status = true
      }
    }
  },
  actions: {
    async getUser ({ state, commit }) {
      try {
        const { data } = await api.authUser.getAuthUser()
        commit('SET_USER', data)
      } catch (e) {
        console.log(e)
      }
    },
    async logout () {
      localStorage.removeItem('token');
      window.location.reload();
    },
    async login () {
      const { data } = await api.authUser.getCode()
      return data.token
    },
    async setTokenToLS () {
      await api.authUser.getToken()
    },
    async changeStatus ({ commit }, status) {
      commit('SET_STATUS', status)
    }
  }
}