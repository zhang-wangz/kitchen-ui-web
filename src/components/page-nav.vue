<template>
    <div id="page-top">
        <el-menu :default-active="this.$route.path" class="page-nav" style="height:60px;width:100%;z-index:1000" mode="horizontal" @select="handleSelect" router>
            <el-menu-item index="/" class="nav-item" route="/">Home</el-menu-item>
            <!-- <el-menu-item index="/recipeList" class="nav-item" route="/recipeList">recipeList</el-menu-item> -->
            <el-menu-item index="/recipeDetail" class="nav-item" route="/recipeDetail">recipeInfo</el-menu-item>
        </el-menu>
    </div>
</template>

<script>
import store from '@/vuex/store.js'
export default {
  name: 'page-nav',
  components: {
    
  },
  data () {
    return {
    }
  },
  store,
  methods: {
    handleSelect (key, keyPath) {
    },
    
  }
}
</script>

<style scoped>
    .nav-item{
        font-size: 16px;
    }
    
</style>
