import { createStore } from 'vuex'
import { fetchFriendList } from '@/api/index'

export default createStore({
  state: {
    friendList: [],
  },
  getters: {
    getFriendList(state) {
      return state.friendList
    },
  },
  mutations: {
    SET_FRIENDLIST: function (state, data) {
      state.friendList = data
    },
  },
  actions: {
    async FETCH_FRIENDLIST({ commit }, payload) {
      const response = await fetchFriendList(payload.p1, payload.p2)
      commit('SET_FRIENDLIST', response.data)
      return response
    },
  },
})
