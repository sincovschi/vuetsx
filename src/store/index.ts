import { createStore } from 'vuex'

export default createStore({
  state: {
    message: 'Welcome to Vue.tsx App'
  },
  mutations: {
    setMessage (state, message) {
      state.message = message
    }
  },
  actions: {
    setMessage ({ commit }, action) {
      commit(action.type, action.payload)
    }
  },
  getters: {
    getMessage ({ message }) {
      return message
    }
  },
  modules: {
  }
})
