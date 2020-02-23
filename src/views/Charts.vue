<template>
    <div class="charts">
        <el-row :gutter="20">
            <el-col :span="16">
                <el-card class="box-card">
                    <div slot="header" class="clearfix">
                        <span>数据分布一</span>
                        <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
                    </div>
                    <div class="card-width"></div>
                </el-card>
            </el-col>
            <el-col :span="8">
                <el-card class="box-card">
                    <div slot="header" class="clearfix">
                        <span>数据分布二</span>
                        <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
                    </div>
                    <div class="card-width"></div>
                </el-card>
            </el-col>
        </el-row>
        <el-row :gutter="20" style="margin-top: 20px">
            <el-col :span="16">
                <el-card class="box-card">
                    <div slot="header" class="clearfix">
                        <span>数据分布三</span>
                        <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
                    </div>
                    <div class="card-width"></div>
                </el-card>
            </el-col>
            <el-col :span="8">
                <el-card class="box-card">
                    <div slot="header" class="clearfix">
                        <span>数据分布四</span>
                        <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
                    </div>
                    <div class="card-width"></div>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: "Charts"
    }
</script>

<style scoped lang="scss">

    .charts {
        /*padding: 10px;*/
    }

    .clearfix:before,
    .clearfix:after {
        display: table;
        content: "";
    }

    .clearfix:after {
        clear: both
    }

    .card-width {
        height: 270px;
    }
</style>