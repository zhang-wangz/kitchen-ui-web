<template>
  <div id="app">
    <el-scrollbar class="scrollbar">
            <div id="appBox">
                <page-nav></page-nav>
                <div class="page-main-box" ref="pageMainBox">
                    <router-view/>
                </div>
                
            </div>
    </el-scrollbar>
  </div>
</template>

<script>
import pagenav from '@/components/page-nav'
export default {
  name: 'App',
  components:{
    "page-nav":pagenav,
  }
}
</script>

<style scoped>
    #app{
        font-family: "Helvetica Neue",Helvetica,"Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
        overflow: hidden;
        width: 100%;
        min-width: 1100px;
    }
    #appBox{
        width: 1100px;
        position: relative;
        left: 50%;
        transform: translate(-50%,0);
    }
    .page-main-box{
        margin-top: 20px;
        /* margin-bottom: 20px; */
        position: relative;
    }
    .scrollbar{
        height: 100%;
    }
    .el-scrollbar__wrap {
        overflow: auto;
    }
</style>
