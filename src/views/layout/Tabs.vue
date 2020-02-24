<template>
    <div class="tabs">
        <el-tag :key="x.name" v-for="(x,y) in tags" :closable="x.name!=='home'" :disable-transitions="false"
                @close="handleClose(x)" effect="plain" type="info" @click="handleClick(x)" :id="x.name">
            <i :class="'el-icon-'+x.icon"></i>&nbsp;&nbsp;{{x.label}}
        </el-tag>
        <!--        <el-tabs type="card" @tab-remove="handleClose">-->
        <!--            <el-tab-pane v-for="(item, index) in tags"-->
        <!--                         :key="item.name" :closable="item.name !== 'home'"-->
        <!--                         :label="item.label"-->
        <!--                         :name="item.name">-->
        <!--                <router-view></router-view>-->
        <!--            </el-tab-pane>-->
        <!--        </el-tabs>-->
    </div>
</template>

<script>
    import {mapState, mapMutations} from 'vuex'
    import NProgress from 'nprogress'
    import 'nprogress/nprogress.css'

    export default {
        name: "Tabs",
        data() {
            return {};
        },
        computed: {
            ...mapState({
                tags: state => state.tabs.tags
            })
        },
        methods: {
            ...mapMutations({
                close: 'close'
            }),
            handleClose(tag) {
                NProgress.start()
                let index = this.tags.findIndex(x => x.name === tag.name)
                this.close(tag)
                if (this.tags[index]) {
                    this.$router.push({path: this.tags[index].path})
                } else {
                    NProgress.start()
                    this.$router.push({path: this.tags[index - 1].path})
                }
                NProgress.done()
            },
            handleClick(val) {
                NProgress.start();
                // document.getElementById(val.name).style.background = 'white'
                this.$router.push({path: val.path})
                this.$store.commit('choose', val)
                NProgress.done()
            }
        }
    }
</script>

<style scoped lang="scss">
    .tabs {
        /*width: 100%;*/
        /*height: 100%;*/
        .el-tag {
            margin-top: 13px;
            z-index: 2;
            width: 140px;
            text-align: center;
            font-size: 14px;
            justify-content: center;
            color: #2F2F2F;
            background: #f3f6f8;
            border: none;
            border-radius: 8px 8px 0 0;
            padding: 2px;
        }
    }

    .el-tag:hover {
        outline: 0 !important;
        background-color: white !important;
    }

    .el-tag:visited {
        outline: 0 !important;
        background-color: white !important;
    }

    .el-tabs {
        position: relative;
        z-index: 2;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
    }
</style>