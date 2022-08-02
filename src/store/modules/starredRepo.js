import * as api from '../../api'

export default {
  namespaced: true,
  state: {
    data: [],
    loading: false
  },
  getters: {
    getRepoById: (state) => (id) => {
      return state.data.find(item => item.id === id)
    }
  },
  mutations: {
    SET_LOADING (state, status) {
      state.loading = status
    },
    SET_STARRED_REPOS: (starredState, payload) => {
      starredState.data = payload.map(item => {
        return item
      })
    },
    SET_ISSUES: (state, { id, issues, loading }) => {
      state.data = state.data.map((item) => {
        if (item.id === id) {
          item.loading = loading;
          item.issues = issues.map((issue) => {
            return {
              id: issue.id,
              title: issue.user.login,
              body: issue.title
            }
          })
        }
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
    },
    async getIssues ({ commit, getters }, id) {
      const repo = getters.getRepoById(id)

      if (repo && !repo.issues) {
        commit('SET_LOADING', true)
        commit('SET_ISSUES', { id: repo.id, issues: [], loading: true })
        const { data } = await api.getIssues.getIssues({ owner: repo.owner.login, repo: repo.name })
        commit('SET_ISSUES', { id: repo.id, issues: data, loading: false })
        commit('SET_LOADING', false)
      }
    }
  }
}