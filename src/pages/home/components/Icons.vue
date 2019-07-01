<template>
    <div class="icons">
        <div class="icon" v-for="items in iconsList" :key="items.id">
            <img :src="items.imgUrl" :alt="items.title">
        </div>
    </div>
</template>

<script> 
export default {
    data () {
        return {
            iconsList:[ {
                id: '0001',
                title: '热门',
                imgUrl: 'https://dwz.cn/dHCQaqIi'
            } ]
        }
    }
}
</script>

<style lang="stylus" scoped>
.icons
    overflow hidden
    height 0
    padding-bottom 50%
    background green
    .icon
        float left
        width 25%
        padding-bottom 25%
</style>
