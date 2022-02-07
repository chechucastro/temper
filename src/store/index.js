import Vue from 'vue'
import Vuex from 'vuex'

// Import Store's by modules
import sortablePostList from './modules/SortableList'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    sortablePostList
  }
})
