<template>
    <div>
        <el-card shadow = "hover" class="tablebox">
            <el-collapse accordion @change="openItem" >
                <template v-for="item in recipeList">
                    <el-collapse-item :name="item.recipeId" :key="item.recipeId">
                        
                        <template slot="title">
                            <div>
                                <i class="el-icon-food" style="margin-right: 15px;color: #409EFF"></i>
                                <el-divider direction="vertical"></el-divider>
                                {{item.recipeName}}
                            </div>
                        </template>
                        <div>
                            <template v-if="activeNames == item.recipeId">
                                <template v-if="loading">
                                    <i class="el-icon-loading"></i> Loading...
                                </template>
                                <template v-else>
                                    <span>
                                        <div style="font-size:20px;margin-left:20px">{{item.recipeName}}</div>
                                        <el-rate max="10" disabled="true" v-model="recipeScore"></el-rate>
                                    </span>
                                    <div v-for="steps in recipeStepsInfo" :key="steps.stepId">
                                        <el-card shadow = "hover">
                                            步骤{{steps.stepId}} . {{steps.stepDes}}
                                        </el-card>
                                    </div>
                                    <div v-for="comments in recipeComments" :key="comments.userId">
                                        用户{{comments.userId}}:{{comments.commentContent}}
                                    </div>
                                </template>
                            </template>
                        </div>
            
                    </el-collapse-item>
                </template>
            </el-collapse>
        </el-card>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name:'recipeInfo-page',
    data(){
        return{
            loading: true,
            isRefresh: true,
            recipeScore: 0,
            recipeStepsInfo: [],
            recipeComments: [],
            recipeList:[],
            clientHeight: window.innerHeight,
            clientWidth: window.innerWidth,
            activeNames: -1,
        
        }
    },
    methods: {
        
        openItem (activeNames) {
            this.activeNames = activeNames
            if (!activeNames) {
                this.recipeStepsInfo = []
                this.recipeComments = []
                return
            }
            this.loading = true
            this.recipeScore = this.recipeList
            this.getRecipeStepsdata(activeNames)
            this.getRecipeCOmmentsdata(activeNames)
        },

        getRecipeStepsdata(recipeId){
            var api = this.$store.state.api
            axios.get(api + '/recipe/getRecipeStepsByRecipeId?recipeId=' + recipeId)
            .then(data=>{
                this.recipeStepsInfo = data.data.dataObj
                // this.loading = false
            },err=>{
                alert(err)
            })
        },
        getRecipeCOmmentsdata(recipeId){
            var api = this.$store.state.api
            axios.get(api + '/recipe/getRecipeCommentsByRecipeId?recipeId=' + recipeId)
            .then(data=>{
                this.recipeComments = data.data.dataObj
                this.loading = false
            },err=>{
                alert(err)
            })
        },
        getRecipeListdata(){
            var api = this.$store.state.api
            axios.get(api + '/recipe/get_all_recipe_list')
            .then(data=>{
                this.recipeList = data.data.dataObj
                // console.log(this.recipeList[0].contriUsr)
            },err=>{
                alert(err)
            })
        },
        

    },
    created(){
        this.getRecipeListdata()
        
    },
    mounted(){
        
    }


}
</script>

<style scoped>
    .tableBox{
        position: relative;
        left: 50%;
        width: 800px;
        transform: translate(-50%,0);
    }
</style>