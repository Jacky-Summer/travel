<template>
    <div class="icons">
        <swiper :options="swiperOption">
            <swiper-slide  v-for="(page, index) in pages" :key="index">
                <div class="icon" v-for="item in page" :key="item.id">
                    <div class="icon-img">
                        <img class='icon-img-content' :src="item.imgUrl"/>
                    </div>
                    <p class="icon-desc">{{ item.desc }}</p>
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        autoplay: false
      }
    }
  },
  computed: {
    pages () {
      const pages = []
      this.list.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
    @import '~styles/variables.styl'
    @import '~styles/mixins.styl'
    .icons
        height 0
        padding-bottom 50%
        margin-top .1rem
        overflow hidden
    .icon
        height 0
        padding-bottom 25%
        float left
        overflow: hidden
        position relative
        width 25%
        .icon-img
            position absolute
            left 0
            right 0
            bottom .44rem
            padding .1rem
            box-sizing border-box
            overflow hidden
            .icon-img-content
                display block
                margin 0 auto
                height 100%
                width 1.2rem
        .icon-desc
            position absolute
            left 0
            right 0
            bottom 0
            height .44rem
            line-height .44rem
            text-align center
            ellipsis()
</style>
