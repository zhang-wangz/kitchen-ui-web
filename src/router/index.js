import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import recipeInfopage from '@/components/recipeInfo-page'
import recipeListpage from '@/components/recipeList-page'
import Error404Page from '@/components/error404-page'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      meta:{
        titie: '主页'
      }
    },
    {
      path: '/recipeDetail',
      // path: '/recipeDetail/:recipeId',
      name: 'recipeInfo-page',
      component: recipeInfopage,
      meta: {
        title: 'recipeInfo - 食谱展示'
      }
    },
    {
      path: '/recipeList',
      name: 'recipeList-page',
      component: recipeListpage,
      meta: {
        title: 'recipeList - 所有的食谱列表'
      }
    },
    {
      path: '*',
      name: 'error404-page',
      component: Error404Page,
      meta: {
        title: 'Error - kitchen'
      }
    }

  ]
})
