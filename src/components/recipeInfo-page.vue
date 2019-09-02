<template>
    <div>
        <el-card shadow = "hover" class="tablebox">
            <div v-loading="loading" v-if="isRefresh">
                <el-table :data="tableData" style="width: 100%">
                    <el-table-column label="Rank" align="center" width="100px">
                        <template slot-scope="scope">
                            {{ scope.$index + 1 }}
                        </template>
                    </el-table-column>
                    <el-table-column label="Userid" align="center">
                        <template slot-scope="scope">
                            <el-link :href="'#/user/'+scope.row.username+'?part=page-top'" :underline="false">
                                {{ scope.row.username }}
                            </el-link>
                        </template>
                    </el-table-column>
                    <el-table-column label="Username" align="center">
                        <template slot-scope="scope">
                            <el-link :href="'#/user/'+scope.row.username+'?part=page-top'" :underline="false">
                                <b :style="'font-weight: 900;color:'+getColorForRating(scope.row.rating)">{{ scope.row.nickname }}</b>
                            </el-link>
                        </template>
                    </el-table-column>
                    

                </el-table>
            </div>
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
            recipeId :'',
            recipeInfo: [],
        }
    },
    methods: {
        pageInit () {
            this.recipeId = this.$route.params.recipeId
        },
        getdata(){
            var api = this.$store.state.api
            axios.get(api + '/recipe/getRecipeStepsByRecipeId?recipeId=' + this.recipeId)
            .then(data=>{
                this.recipeInfo = data.data.dataObj
            },err=>{
                // if (err.response) {
                // this.$message.error(err.response.data.msg)
                // }
                alert(err)
            })
        }

    },
    created(){
        this.pageInit()
        this.getdata()
    },


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