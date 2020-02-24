<template>
    <div class="echarts">
        <el-row :gutter="20">
            <el-col :span="16">
                <el-card>
                    <div slot="header">
                        <span>数据走势</span>
                        <el-button style="float: right; padding: 3px 0" type="text">查看更多</el-button>
                    </div>
                    <div class="box-card">
                        <div id="chart1" :style="{width:'100%', height: '100%'}"></div>
                    </div>
                </el-card>
            </el-col>
            <el-col :span="8">
                <el-card>
                    <div slot="header">
                        <span>订单统计</span>
                        <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
                    </div>
                    <div class="box-card">
                        <el-row :gutter="10">
                            <div v-for="(x,y) in data">
                                <el-col :span="6">
                                    <span class="progress-title">{{x.title}}</span>
                                </el-col>
                                <el-col :span="14">
                                    <el-progress :show-text="false" :stroke-width="12" :percentage="x.count"
                                                 :color="x.color"></el-progress>
                                </el-col>
                                <el-col :span="4">
                                    <span class="progress-count">{{x.count}}个</span>
                                </el-col>
                            </div>
                        </el-row>
                    </div>
                </el-card>
            </el-col>
        </el-row>
        <el-row :gutter="20" style="margin-top: 20px">
            <el-col :span="16">
                <el-card>
                    <div slot="header">
                        <span>数据分布三</span>
                        <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
                    </div>
                    <div class="box-card"></div>
                </el-card>
            </el-col>
            <el-col :span="8">
                <el-card>
                    <div slot="header">
                        <span>数据分布四</span>
                        <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
                    </div>
                    <div class="box-card"></div>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import echarts from 'echarts'

    export default {
        name: "Charts",
        data() {
            return {
                data: [
                    {
                        title: '订单状态',
                        count: 80,
                        color: '#409EFF'
                    },
                    {
                        title: '订单状态',
                        count: 72,
                        color: '#67C23A'
                    },
                    {
                        title: '订单状态',
                        count: 48,
                        color: '#E6A23C'
                    },
                    {
                        title: '订单状态',
                        count: 64,
                        color: '#F56C6C'
                    },
                    {
                        title: '订单状态',
                        count: 156,
                        color: 'green'
                    }
                ]
            }
        },
        methods: {
            chart1() {
                let chart = echarts.init(document.getElementById('chart1'));
                chart.setOption({
                    title: {
                        // text: '堆叠区域图'
                    },
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'cross',
                            label: {
                                backgroundColor: '#6a7985'
                            }
                        }
                    },
                    legend: {
                        data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
                    },
                    toolbox: {
                        feature: {
                            saveAsImage: {}
                        }
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    xAxis: [
                        {
                            type: 'category',
                            boundaryGap: false,
                            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
                        }
                    ],
                    yAxis: [
                        {
                            type: 'value'
                        }
                    ],
                    series: [
                        {
                            name: '邮件营销',
                            type: 'line',
                            stack: '总量',
                            areaStyle: {},
                            data: [120, 132, 101, 134, 90, 230, 210]
                        },
                        {
                            name: '联盟广告',
                            type: 'line',
                            stack: '总量',
                            areaStyle: {},
                            data: [220, 182, 191, 234, 290, 330, 310]
                        },
                        {
                            name: '视频广告',
                            type: 'line',
                            stack: '总量',
                            areaStyle: {},
                            data: [150, 232, 201, 154, 190, 330, 410]
                        },
                        {
                            name: '直接访问',
                            type: 'line',
                            stack: '总量',
                            areaStyle: {},
                            data: [320, 332, 301, 334, 390, 330, 320]
                        },
                        {
                            name: '搜索引擎',
                            type: 'line',
                            stack: '总量',
                            label: {
                                normal: {
                                    show: true,
                                    position: 'top'
                                }
                            },
                            areaStyle: {},
                            data: [820, 932, 901, 934, 1290, 1330, 1320]
                        }
                    ]
                });
            }
        },
        mounted() {
            this.chart1();
        },
    }
</script>

<style scoped lang="scss">

    .echarts {
        /*padding: 10px;*/
    }

    .box-card {
        height: 300px;

        .el-progress {
            margin-bottom: 30px;
        }

        .progress-title {
            color: #666666;
            font-size: 15px;
        }

        .progress-count {
            color: #666666;
            font-size: 13px;
        }
    }
</style>