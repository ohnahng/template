<template>
    <el-container style="height: 100%">
        <el-aside :width="isCollapsed ? '240' : '64'">
            <Aside></Aside>
        </el-aside>
        <el-container>
            <el-header>
                <Head></Head>
            </el-header>
            <el-header class="tabs">
                <Tabs></Tabs>
            </el-header>
            <el-main>
                <!--<Main></Main>-->
                <router-view/>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
    import Aside from "@/views/layout/Aside";
    import Head from "@/views/layout/Head";
    import Tabs from "@/views/layout/Tabs";
    import Main from "@/views/layout/Main";

    export default {
        name: "Layout",
        components: {Head, Aside, Tabs, Main},
        computed: {
            isCollapsed() {
                return this.$store.state.tabs.collapse
            }
        }
    }
</script>

<style scoped lang="scss">
    .el-menu-left .el-menu-item:hover {
        outline: 0 !important;
        background-color: #E9EEF3 !important;
    }

    .el-menu-right .el-menu-item:hover {
        outline: 0 !important;
        background-color: #E9EEF3 !important;
    }

    .el-header {
        box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.1)
    }

    .el-aside {
        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.1);
    }

    .el-main {
        /*background: #f3f6f8;*/
    }

    .tabs {
        height: 45px !important;
        border: none !important;
        background: #f3f6f8;
    }
</style>