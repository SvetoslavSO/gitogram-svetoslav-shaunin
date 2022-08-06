import * as api from '../../api'

export default 
{
  namespaced: true,
  state: {
    data: [],
    loading: false
  },
  mutations:{
    SET_FOLLOWING : (state, data) => {
      state.data = data.map((follow) => {
          follow.user = data.login
          follow.avatar = data.avatar_url
          follow.type = data.type
          follow.id = data.id
          follow.followed = true
          return follow
        }
      )
    },
    SET_UNFOLLOWING: (state, data) => {
      state.data = state.data.map((follow) => {
        if (follow.login === data) {
          follow.followed = false
        }
        return follow
      })
    }, 
    SET_LOADING (state, status) {
      state.loading = status
    }
  },
  actions: {
    async getFollowings ({ state, commit }) {
      commit('SET_LOADING', true)
      try {
        const { data } = await api.followings.follows();
        commit('SET_FOLLOWING', data)
      } catch (e) {
        console.log(e)
      } finally {
        commit('SET_LOADING', false)
      }
    },
    async unfollow ({ state, commit }, follow) {
      commit('SET_LOADING', true)  
      await commit('SET_UNFOLLOWING', follow)
      try {
        await api.followings.unfollow(follow)
      } catch (e) {
        console.log(e)
      } finally {
        commit('SET_LOADING', false)
      }
    },
    async follow ({ state, commit }, follow) {
      commit('SET_LOADING', true)
      try {
        await api.followings.follow(follow)
      } catch (e) {
        console.log(e)
      } finally {
        commit('SET_LOADING', false)
        const { data } = await api.followings.follows();
        commit('SET_FOLLOWING', data)
      }
    }
  }
}