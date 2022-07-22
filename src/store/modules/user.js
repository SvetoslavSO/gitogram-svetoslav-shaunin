import * as api from '../../api'

export default
{ 
  namespaced: true,
  state:{
    data:[]
  },
  getters:{

  },
  mutations:{
    SET_TRENDINGS: (state, trendings) => {
      state.data = trendings
    }
  },
  actions:{
    async fetchTrendings({ state, commit, rootState }){
      try {
        const { data } = await api.trendings.getTrendings()
        commit("SET_TRENDINGS", data.items)
      } catch (e) {
        console.log(e);
        throw e;
      }
    }
  }
}