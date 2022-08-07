import * as api from '../../api'

export default 
{
  namespaced: true,
  state: {
    data: [],
    loading: false
  },
  mutations:{
    SET_FOLLOWING : (state, starred) => {
      state.data = starred.map((follow) => {
        follow.user = follow.owner.login
        follow.avatar = follow.owner.avatar_url
        follow.type = follow.owner.type
        follow.id = follow.owner.id
        follow.following = false
        return follow
      })
    },
    SET_FOLLOWS: (state, payload) => {
      state.data.map((item) => {
        return payload.some((another) => {
          if (item.owner.id === another.id) {
            item.following = true
          } else {
            item.following = false
          }
          return item.following
        })
      })
    },
    SET_UNFOLLOWING: (state, data) => {
      state.data = state.data.map((follow) => {
        if (follow.owner.login === data) {
          follow.following = false
        }
        return follow
      })
    }, 
    SET_FOLLOW: (state, data) => {
      state.data = state.data.map((follow) => {
        if (follow.owner.login === data) {
          follow.following = true
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
        const { data } = await api.starred.getAllStarredRepo();
        commit('SET_FOLLOWING', data)
      } catch (e) {
        console.log(e)
      } finally {
        commit('SET_LOADING', false)
      }
    },
    async checkFollowings ({ state, commit }) {
      const { data } = await api.followings.follows();
      commit('SET_FOLLOWS', data)
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
      await commit('SET_FOLLOW', follow)
      try {
        await api.followings.follow(follow)
      } catch (e) {
        console.log(e)
      } finally {
        commit('SET_LOADING', false)
      }
    }
  }
}