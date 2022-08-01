import * as api from '../../api'

export default
{ 
  namespaced: true,
  state:{
    data:[]
  },
  getters:{
    getRepoById: (state) => (id) => {
      return state.data.find(item => item.id === id)
    }
  },
  mutations:{
    SET_TRENDINGS: (state, trendings) => {
      state.data = trendings.map(item => {
        item.following = {
          loading: false,
          error: ''
        }
        return item;
      })
    },
    SET_README:(state, payload) => {
      state.data = state.data.map(repo => {
        if (payload.id === repo.id) {
          repo.readme = payload.content;
        }
        return repo;
      })
    },
    SET_FOLLOWING: (state, payload) => {
      state.data = state.data.map((repo) => {
        return payload.id === repo.id ? payload : repo
      })
    },
    SET_STARRED: (state, payload) => {
      state.data.map((item) => {
        return payload.some((repo) => {
          if (item.id === repo.id) {
            item.status = true
          } else {
            item.status = false
          }
          return item.status
        })
      })
     },
     SET_ISSUES: (state, { repo, payload }) => {
      state.data = state.data.map((item) => {
        if (repo.id === item.id) {
            repo.issues = {
              title: payload.map((item) => item.title),
              user: payload.map((item) => item.user.login)
          }
        }
        return repo
      })
     }
  },
  actions:{
    async fetchTrendings ({ state, commit, rootState }) {
      try {
        const { data } = await api.trendings.getTrendings()
        commit('SET_TRENDINGS', data.items)
      } catch (e) {
        console.log(e);
        throw e;
      }
    },
    async fetchReadme ({ commit, getters }, { id, owner, repo }) {
      const curRepo = getters.getRepoById(id);
      if (curRepo.readme !== undefined) return
      try {
        const { data } = await api.readme.getReadme({ owner, repo });
        commit('SET_README', { id, content:data });
      } catch (e) {
        console.log(e)
        throw e;
      }
    },
    async starRepo ({ commit, getters }, id) {
      const repo = getters.getRepoById(id);
      const options = { ...repo }
      commit('SET_FOLLOWING', {
        ...repo,
        loading: true,
        error: ''
      });

      try {
        await api.starred.starRepo({ owner: repo.owner.login, repo: repo.name });
        options.status = true;
      } catch (e) {
        options.error = 'ERROR';
      } finally {
        options.loading = false;
        commit('SET_FOLLOWING', options);
      }
    },
    async unStarRepo ({ commit, getters }, id) {
      const repo = getters.getRepoById(id);
      const options = { ...repo }
      commit('SET_FOLLOWING', {
        ...repo,
        loading: true,
        error: ''
      });

      try {
        await api.starred.unStarRepo({ owner: repo.owner.login, repo: repo.name });
        options.status = false;
      } catch (e) {
        options.error = 'ERROR';
      } finally {
        options.loading = false;
        commit('SET_FOLLOWING', options);
      }
    },
    async checkStarred ({ commit }, payload) {
      commit('SET_STARRED', payload)
    },
    async getIssues ({ commit, getters }, id) {
      const repo = getters.getRepoById(id)
      const { data } = await api.getIssues.getIssues({ owner: repo.owner.login, repo: repo.name })
      commit('SET_ISSUES', { repo, payload:data })
    }
  }
}