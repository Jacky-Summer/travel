<template>
    <div>
        <div class="banner" @click="handleBannerClick">
            <img class="banner-img" :src="bannerImg" alt="">
            <div class="banner-info">
                <div class="banner-title">{{ this.sightName }}</div>
                <div class="banner-number">
                    <span class="iconfont banner-icon">&#xe647;</span>
                    39
                </div>
            </div>
        </div>
        <common-gallary
            :imgs="imgs"
            v-show="showGallary"
            @close="handleBannerClose"
        ></common-gallary>
    </div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'
export default {
  name: 'Banner',
  props: {
    bannerImg: String,
    sightName: String,
    imgs: Array
  },
  components: {
    CommonGallary
  },
  data () {
    return {
      showGallary: false
    }
  },
  methods: {
    handleBannerClick () {
      this.showGallary = true
    },
    handleBannerClose () {
      this.showGallary = false
    }
  }
}
</script>

<style lang="stylus" scoped>
    .banner
        position relative
        height 0
        overflow hidden
        padding-bottom 55%
    .banner-img
        width 100%
    .banner-info
        display flex
        position absolute
        left 0
        right 0
        bottom 0
        color #fff
        line-height .6rem
        background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))
        .banner-title
            flex 1
            font-size .32rem
            padding 0 .2rem
        .banner-number
            height .32rem
            line-height .32rem
            margin-top .14rem
            padding 0 .4rem
            border-radius .2rem
            background rgba(0, 0, 0, .8)
            font-size .24rem
            .banner-icon
                font-size .24rem

</style>
