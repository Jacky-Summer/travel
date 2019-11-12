<template>
    <div>
        <detail-banner
          :bannerImg="bannerImg"
          :sightName="sightName"
          :imgs="gallaryImgs"
        ></detail-banner>
        <detail-header></detail-header>
        <div class="content">
          <detail-list :list="categoryList"></detail-list>
        </div>
    </div>
</template>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'
import axios from 'axios'
export default {
  name: 'Detail',
  data () {
    return {
      bannerImg: '',
      sightName: '',
      categoryList: [],
      gallaryImgs: []
    }
  },
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  methods: {
    getDetailInfo () {
      axios.get('/static/mock/detail.json', {
        params: {
          id: this.$route.params.id
        }
      }).then(this.handleGetDataSucc)
    },
    handleGetDataSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        console.log(res)
        const data = res.data
        this.bannerImg = data.bannerImg
        this.categoryList = data.categoryList
        this.gallaryImgs = data.gallaryImgs
        this.sightName = data.sightName
      }
    }
  },
  mounted () {
    this.getDetailInfo()
  }
}
</script>

<style lang="stylus" scoped>
  .content
    height 50rem
</style>
