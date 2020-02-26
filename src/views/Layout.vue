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
                <div class="tabs-nav">
                    <Tabs></Tabs>
                </div>
            </el-header>
            <el-main>
                <router-view/>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
    import Aside from "@/views/layout/Aside";
    import Head from "@/views/layout/Head";
    import Tabs from "@/views/layout/Tabs";

    export default {
        name: "Layout",
        components: {Head, Aside, Tabs},
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
        background: #fff;
        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.1)
    }

    .el-aside {
        background: #fff;
        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.1);
    }

    .el-main {
        background: #f3f6f8;
    }

    .tabs {
        border-radius: 0px;
        padding: 0px !important;
        background: #f3f6f8;
        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.1);
        margin-bottom: -10px;
    }

</style>