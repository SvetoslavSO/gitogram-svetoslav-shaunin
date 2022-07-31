import * as api from '../../api'

export default {
  namespaced: true,
  starredState: {
    data: []
  },
  getters:{
    
  },
  mutations: {
    SET_STARRED_REPOS: (starredState, payload) => {
      starredState.data = payload.map(item => {
        return item
      })
    }
  },
  actions: {
    async fetchStarredRepo ({ commit }) {
      try {
        const { data } = await api.starred.getStarredRepo({ limit : 10 })
        commit('SET_STARRED_REPOS', data)
      } catch (e) {
        console.log(e)
        throw e;
      }
    }
  }
}