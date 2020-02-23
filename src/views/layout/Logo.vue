<template>
    <div class="logo">
        <div class="shrink" v-if="isCollapsed">{{title.shrink}}</div>
        <div class="expand" v-else>{{title.expand}}</div>
    </div>
</template>

<script>
    import {mapState} from 'vuex'

    export default {
        name: "Logo",
        computed: {
            ...mapState({
                title: state => state.tabs.title
            }),
            isCollapsed() {
                return this.$store.state.tabs.collapse
            }
        }
    }
</script>

<style scoped lang="scss">
    .logo {
        height: 60px;
        min-width: 64px;
        max-width: 240px;
        display: flex;
        align-items: center;
        border-radius: 0px;
        justify-content: center;
        color: #3788ee;
        transition: color .2s ease;

        .expand {
            font-weight: 700;
            font-size: 20px;
        }

        .shrink {
            font-weight: 700;
            font-size: 24px;
        }
    }
</style>