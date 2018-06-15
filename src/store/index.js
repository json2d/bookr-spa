import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    books: {},
    auth: {
      token: '123123123123'
    }
  },
  mutations: {
    addBooks (books) {
      books.forEach(book => {
        this.$set(this.state.books, book._id, book)
      })
    },
    setToken (state,token) {
      state.auth.token = token
    }
  }
  // modules: {
  //   cart,
  //   products
  // },
  // strict: debug,
  // plugins: debug ? [createLogger()] : []
})
