import Vuex from 'vuex'

import { toyStore } from './toy-store.js'
import { userStore } from './user-store.js'
import { reviewStore } from './review.store.js'

export const store = Vuex.createStore({
  strict: true,
  modules: {
    toyStore,
    userStore,
    reviewStore
  },
})
