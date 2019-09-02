import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const api = "http://bt.wangz.online:8080"

var state = {
    page:null,//通过page来进行更新操作，都是一些内容更新
    api: api,
    receipeList:[],
    receipeDetailsByrecipeId: [],

}

var mutations = {

    savePage (state, page) {
        state.page = page
      },

}


export default new Vuex.Store({
    state,
    mutations
  })