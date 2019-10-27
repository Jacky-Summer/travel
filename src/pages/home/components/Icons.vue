<template>
    <div class="icons">
        <swiper :options="swiperOption">
            <swiper-slide  v-for="(page, index) in pages" :key="index">
                <div class="icon" v-for="item in page" :key="item.id">
                    <div class="icon-img">
                        <img class='icon-img-content' :src="item.iconUrl"/>
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
  data () {
    return {
      swiperOption: {
        autoplay: false
      },
      iconsList: [{
        id: '0001',
        iconUrl: 'http://s.qunarzz.com/homenode/images/touchheader/hotel.png',
        desc: '热门酒店'
      }, {
        id: '0002',
        iconUrl: 'http://s.qunarzz.com/homenode/images/touchheader/flight.png',
        desc: '订购机票'
      }, {
        id: '0003',
        iconUrl: 'http://s.qunarzz.com/homenode/images/touchheader/package.png',
        desc: '休闲度假'
      }, {
        id: '0004',
        iconUrl: 'http://s.qunarzz.com/homenode/images/touchheader/train.png',
        desc: '买火车票'
      }, {
        id: '0005',
        iconUrl: 'http://s.qunarzz.com/homenode/images/touchheader/piao.png',
        desc: '景点门票'
      }, {
        id: '0006',
        iconUrl: 'http://s.qunarzz.com/homenode/images/touchheader/train.png',
        desc: '买火车票'
      }, {
        id: '0007',
        iconUrl: 'http://s.qunarzz.com/homenode/images/touchheader/package.png',
        desc: '休闲度假'
      }, {
        id: '0008',
        iconUrl: 'http://s.qunarzz.com/homenode/images/touchheader/flight.png',
        desc: '订购机票'
      }, {
        id: '0009',
        iconUrl: 'http://s.qunarzz.com/homenode/images/touchheader/hotel.png',
        desc: '热门酒店'
      }, {
        id: '0010',
        iconUrl: 'http://s.qunarzz.com/homenode/images/touchheader/flight.png',
        desc: '订购机票'
      }, {
        id: '0011',
        iconUrl: 'http://s.qunarzz.com/homenode/images/touchheader/package.png',
        desc: '休闲度假'
      }]
    }
  },
  computed: {
    pages () {
      const pages = []
      this.iconsList.forEach((item, index) => {
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
</style>
