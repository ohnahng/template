<template>
    <header>
        <div class="left">
            <el-button type="text" @click="collapse">
                <i :class="{'el-icon-s-unfold':!isCollapsed,'el-icon-s-fold':isCollapsed}" style="font-size: 21px;"></i>
            </el-button>
            <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ path: '/home' }">Home</el-breadcrumb-item>
                <el-breadcrumb-item :to="{path : current.path}" v-if="current">
                    {{current.label}}
                </el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="right">
            <el-tooltip effect="light" placement="bottom" content="布局">
                <el-button type="text">
                    <Opts></Opts>
                </el-button>
            </el-tooltip>
            <el-tooltip effect="light" placement="bottom" content="通知">
                <el-button type="text" icon="el-icon-bell"></el-button>
            </el-tooltip>
            <el-tooltip effect="light" placement="bottom" content="文档">
                <el-button type="text" icon="el-icon-reading"></el-button>
            </el-tooltip>
            <el-tooltip effect="light" placement="bottom" content="帮助">
                <el-button type="text" icon="el-icon-help"></el-button>
            </el-tooltip>
            <el-dropdown trigger="click">
                <span class="el-dropdown-link">
                    <div>
                        <el-avatar :src="profile" :size="30"></el-avatar>
                    </div>
                    <div class="dropdown-title">
                         Chris<i class="el-icon-arrow-down el-icon--right"></i>
                    </div>
                    </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item icon="el-icon-user">个人信息</el-dropdown-item>
                    <el-dropdown-item icon="el-icon-upload2">退出登陆</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </header>
</template>

<script>
    import {mapState} from 'vuex'
    import Logo from "@/views/layout/Logo";
    import Opts from "@/views/layout/Opts";

    export default {
        name: "Head",
        components: {Opts, Logo},
        data() {
            return {
                profile: require('../../assets/profile.png')
            }
        },
        computed: {
            ...mapState({
                current: state => state.tabs.current
            }),
            isCollapsed() {
                return this.$store.state.tabs.collapse
            }
        },
        methods: {
            collapse() {
                this.$store.commit('collapse')
            }
        }
    }
</script>

<style scoped lang="scss">
    header {
        display: flex;
        align-items: center;
        height: 100%;
        width: 100%;

        .menu {
            font-size: 20px;
        }

        justify-content: space-between;
    }

    .left {
        display: flex;
        align-items: center;

        .el-button {
            margin-right: 20px;
        }
    }

    .right {
        display: flex;
        float: right;

        .el-button {
            font-size: 20px;
            margin-right: 30px;
        }

        .el-dropdown {
            margin: 0;
            /*padding: 0 18px;*/
            font-size: 16px;
            cursor: pointer;
            align-items: center;
            display: flex;
        }

        .el-avatar {
            margin: -5px 8px 0 5px;
            width: 32px;
            height: 32px;
            border-radius: 100%;
            box-sizing: border-box;
            border: 1px solid #eee;
            vertical-align: middle;
        }

        .el-dropdown-link {
            line-height: 60px;
            display: flex;
        }
    }
</style>