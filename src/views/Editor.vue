<template>
    <mavon-editor style="min-height: 600px" v-model="article"
                  :boxShadow="false"
                  defaultOpen="preview"
                  @save="saveClick"></mavon-editor>
</template>

<script>
    import {mavonEditor} from 'mavon-editor'
    import 'mavon-editor/dist/css/index.css'

    export default {
        name: "Editor",
        components: {
            mavonEditor
        },
        data() {
            return {
                article: ''
            }
        },
        methods:{
            saveClick(){
                alert(this.article)
            }
        }
    }
</script>

<style scoped>

</style>