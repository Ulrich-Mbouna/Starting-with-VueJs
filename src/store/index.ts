import { createStore } from 'vuex'

// @ts-ignore
import users from './modules/users.js'
//@ts-ignore
import articles from './modules/article.js'

export default createStore({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    users,
    articles
  }
})
