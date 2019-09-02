<template>
  
</template>

<script>
export default {
    name:"recipeList-page",
    data (){
        return{
            recipeList : [],
            
        }
    },
    methods: {
        getdata(){
            var api = this.$store.state.api
            axios.get(api + '/recipe/get_all_recipe_list')
            .then(data=>{
                this.recipeList = data.data.dataObj
            },err=>{
                alert(err)
            })
        }
        
    },


}
</script>

<style>

</style>