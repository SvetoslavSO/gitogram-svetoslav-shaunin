import * as api from '../../api'

export default 
{
  namespaced: true,
  state: {
    data: [],
    loading: false
  },
  mutations:{
    SET_REPOS : (state, data) => {
      state.data = data.map((repo) => {
          return repo
        }
      )
    },
    SET_LOADING (state, status) {
      state.loading = status
    }
  },
  actions: {
    async getRepos ({ state, commit }) {
      commit('SET_LOADING', true)
      try {
        const { data } = await api.userRepos.repos();
        commit('SET_REPOS', data)
      } catch (e) {
        console.log(e)
      } finally {
        commit('SET_LOADING', false)
      }
    }
  }
}