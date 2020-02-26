<template>
    <div class="aside">
        <Logo></Logo>
        <el-menu
                default-active="/home"
                class="el-menu-vertical-demo"
                text-color="black"
                :collapse="isCollapsed"
                active-text-color="#3788ee"
                unique-opened>
            <el-menu-item :index="x.path" v-for="(x,y) in notChildren" :key="x.path" @click="clickMenu(x)">
                <i :class="'el-icon-'+x.icon"></i>
                <span slot="title">{{x.label}}</span>
            </el-menu-item>
            <el-submenu :index="y+''" v-for="(x,y) in hasChildren" :key="y">
                <template slot="title">
                    <i :class="'el-icon-'+x.icon"></i>
                    <span>{{x.label}}</span>
                </template>
                <el-menu-item :index="z.path" v-for="z in x.children" :key="z.path" @click="clickMenu(z)">
                    &nbsp;&nbsp;{{z.label}}
                </el-menu-item>
            </el-submenu>
        </el-menu>
    </div>
</template>

<script>
    import Logo from "@/views/layout/Logo";

    export default {
        name: "Aside",
        components: {Logo},
        data() {
            return {
                menus: [
                    {
                        path: '/',
                        name: 'home',
                        label: '系统首页',
                        icon: 's-home'
                    },
                    {
                        path: '/charts',
                        name: 'charts',
                        label: 'Echarts',
                        icon: 'pie-chart'
                    },
                    {
                        label: '权限管理',
                        icon: 's-platform',
                        children: [
                            {
                                path: '/user',
                                name: 'user',
                                label: '用户管理',
                                icon: ''
                            },
                            {
                                path: '/role',
                                name: 'role',
                                label: '角色管理',
                                icon: ''
                            },
                            {
                                path: '/aces',
                                name: 'aces',
                                label: '资源管理',
                                icon: ''
                            },
                        ]
                    },
                    {
                        path: '/search',
                        name: 'search',
                        label: '搜索列表',
                        icon: 'search'
                    },
                    {
                        path: '/setting',
                        name: 'setting',
                        label: '系统管理',
                        icon: 'setting'
                    },
                    {
                        name: 'extend',
                        label: '扩展组件',
                        icon: 'edit-outline',
                        children: [
                            {
                                path: '/editor',
                                name: 'editor',
                                label: 'MarkDown',
                            }
                        ]
                    },
                    {
                        path: '/blog',
                        name: 'blog',
                        label: '博客管理',
                        icon: 'document'
                    },
                    {
                        label: '其他管理',
                        icon: 'share',
                        children: [
                            {
                                path: '/other1',
                                name: 'other1',
                                label: '其他1',
                                icon: ''
                            },
                            {
                                path: '/other2',
                                name: 'other2',
                                label: '其他2',
                                icon: ''
                            }
                        ]
                    },
                ]
            }
        },
        computed: {
            notChildren() {
                return this.menus.filter(x => !x.children)
            },
            hasChildren() {
                return this.menus.filter(x => x.children)
            },
            isCollapsed() {
                return this.$store.state.tabs.collapse
            }
        },
        methods: {
            clickMenu(val) {
                this.$router.push({name: val.name})
                this.$store.commit('choose', val)
            }
        }
    }
</script>

<style scoped lang="scss">
    .aside {
        height: 100%;
    }

    .el-menu {
        border-right-width: 0;
        border-radius: 0px;
    }

    .el-menu-vertical-demo:not(.el-menu--collapse) {
        width: 240px;
        min-height: 400px;
    }

    .el-menu-item:hover {
        outline: 0 !important;
        background-color: #f0f6ff !important;
        border-right: 3px solid #3788ee;
    }

    .el-submenu:hover {
        outline: 0 !important;
        background-color: #f0f6ff !important;
    }
</style>