<template>
    <div class="header">
        <router-link to='/'>
            <div class="iconfont header-back">&#xe624;</div>
        </router-link>
    </div>
</template>

<script>
export default {
  name: 'CityHeader'
}
</script>

<style lang="stylus" scoped>
    @import '~styles/variables'
    .header
        height $headerHeight
        line-height $headerHeight
        background $bgColor
        color #fff
        text-align center
        overflow hidden
        font-size .32rem
        position relative
        .header-back
            position absolute
            top 0
            left 0
            font-size: .4rem
            width .64rem
            text-align center
            font-size .4rem
            color #fff
</style>
