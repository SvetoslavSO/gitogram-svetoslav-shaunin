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
    SET_README:(state, { id, readme, loading, error }) => {
      state.data = state.data.map(repo => {
        if (id === repo.id) {
          repo.readme = readme;
          repo.readme_loading = loading;
          repo.error = error;
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
      const _repo = getters.getRepoById(id);

      if (_repo.readme) {
        return
      }

      const options = {
        id: _repo.id,
        readme: '',
        loading: true,
        error: ''
      }

      commit('SET_README', options);

      try {
        const { data } = await api.readme.getReadme({ owner, repo });
        options.readme = data;
      } catch (e) {
        options.error = 'ERROR';
      } finally {
        options.loading = false;
        commit('SET_README', options);
      }
    },
    async starRepo ({ commit, getters }, id) {
      const repo = getters.getRepoById(id);
      const options = { ...repo }
      commit('SET_FOLLOWING', {
        ...repo,
        follow_loading: true,
        error: ''
      });

      try {
        await api.starred.starRepo({ owner: repo.owner.login, repo: repo.name });
        options.status = true;
      } catch (e) {
        options.error = 'ERROR';
      } finally {
        options.follow_loading = false;
        commit('SET_FOLLOWING', options);
      }
    },
    async unStarRepo ({ commit, getters }, id) {
      const repo = getters.getRepoById(id);
      const options = { ...repo }
      commit('SET_FOLLOWING', {
        ...repo,
        follow_loading: true,
        error: ''
      });

      try {
        await api.starred.unStarRepo({ owner: repo.owner.login, repo: repo.name });
        options.status = false;
      } catch (e) {
        options.error = 'ERROR';
      } finally {
        options.follow_loading = false;
        commit('SET_FOLLOWING', options);
      }
    },
    async checkStarred ({ commit }, payload) {
      commit('SET_STARRED', payload)
    }
  }
}
