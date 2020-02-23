<template>
    <div class="opts">
        <span><i class="el-icon-s-operation" @click="open"></i></span>
        <el-drawer title="系统布局设置" :with-header="false" :visible.sync="drawer" direction="rtl" size="22%" class="drawer">
            <div class="drawer-body">
                <div class="drawer-item">
                    <span class="drawer-title">Aside风格</span>
                    <span>
                        <el-radio-group v-model="aside" size="small" fill="#3788ee">
                            <el-radio-button label="dark">黑色</el-radio-button>
                            <el-radio-button label="light">白色</el-radio-button>
                        </el-radio-group>
                    </span>
                </div>
                <div class="drawer-item">
                    <span class="drawer-title">开启全局搜索</span>
                    <span> <el-switch v-model="search" active-color="#3788ee"></el-switch></span>
                </div>
                <div class="drawer-item">
                    <span class="drawer-title">侧边栏收缩</span>
                    <span> <el-switch v-model="collapse" active-color="#3788ee"></el-switch></span>
                </div>
                <div class="drawer-item">
                    <span class="drawer-title">开启多Tab</span>
                    <span> <el-switch v-model="tabs" active-color="#3788ee"></el-switch></span>
                </div>
            </div>
        </el-drawer>
    </div>
</template>

<script>
    export default {
        name: "Opts",
        data() {
            return {
                drawer: false,
                aside: "dark",
                search: true,
                collapse: true,
                tabs: false
            }
        },
        methods: {
            open() {
                this.drawer = true;
            }
        }
    }
</script>

<style scoped lang="scss">
    .drawer {
        font-size: 16px;
        box-sizing: border-box;

        .drawer-body {
            width: 100%;
            padding: 0 16px;
        }

        .drawer-item {
            width: 100%;
            display: flex;
            margin-bottom: 24px;
            justify-content: space-between;
        }

        .drawer-title {
            color: #555;
            text-indent: 5px;
            font-size: 14px;
        }
    }

</style>