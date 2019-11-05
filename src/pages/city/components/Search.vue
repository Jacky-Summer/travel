<template>
    <div>
        <div class="search">
            <input v-model="keyword" class="search-input" type="text" placeholder="输入城市名或拼音"/>
        </div>
        <div class="search-content" ref="search" v-show="keyword">
            <ul>
                <li
                    class="search-item border-bottom"
                    v-for="item in list"
                    :key="item.id"
                >
                {{ item.name }}
                </li>
                <li class="search-item border-bottom" v-show="hasNoData">
                    没有找到匹配数据
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
  name: 'CitySearch',
  props: {
    cities: Object
  },
  data () {
    return {
      keyword: '',
      list: [],
      timer: null
    }
  },
  computed: {
    hasNoData () {
      return !this.list.length
    }
  },
  watch: {
    keyword () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.keyword) {
        this.list = []
        return
      }
      this.timer = setTimeout(() => {
        const result = []
        for (let i in this.cities) {
          this.cities[i].forEach(item => {
            if (item.spell.indexOf(this.keyword) > -1 || item.name.indexOf(this.keyword) > -1) {
              result.push(item)
            }
          })
        }
        this.list = result
      }, 100)
    }
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.search)
  }
}
</script>

<style lang="stylus" scoped>
    @import '~styles/variables'
    .search
        height .72rem
        padding 0 .1rem
        background $bgColor
        color #fff
        .search-input
            box-sizing border-box
            width 100%
            height .62rem
            padding 0 .1rem
            line-height .62rem
            text-align center
            border-radius .06rem
            color #666
    .search-content
        background #eee
        position absolute
        overflow hidden
        top 1.58rem
        left 0
        right 0
        bottom 0
        z-index 1
        .search-item
            line-height .62rem
            padding-left .2rem
            background #fff
            color #666
</style>
