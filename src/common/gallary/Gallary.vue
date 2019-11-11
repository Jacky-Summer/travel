<template>
    <div class="container" @click="handleGallaryClick">
        <div class="wrapper">
            <swiper :options="swiperOption">
                <swiper-slide
                    v-for="(item, index) in imgs"
                    :key="index"
                >
                    <img class="gallary-img" :src="item" alt="">
                </swiper-slide>
                <div class="swiper-pagination"  slot="pagination"></div>
            </swiper>
        </div>
    </div>
</template>

<script>
export default {
  name: 'CommonGallary',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        observeParents: true,
        observer: true
      }
    }
  },
  props: {
    imgs: {
      type: Array,
      default () {
        return []
      }
    }
  },
  methods: {
    handleGallaryClick () {
      this.$emit('close')
    }
  }
}
</script>

<style lang="stylus" scoped>
    .container >>> .swiper-container
        overflow: inherit
    .container
        display flex
        flex-direction column
        justify-content center
        position fixed
        top 0
        bottom 0
        left 0
        right 0
        overflow hidden
        background #000
        z-index 99
        .wrapper
            height 0
            width 100%
            padding-bottom 100%
            background #fff
            .gallary-img
                width 100%
            .swiper-pagination
                color: #fff
                bottom: -1rem
</style>
