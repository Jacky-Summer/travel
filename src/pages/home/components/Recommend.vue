<template>
    <div>
        <div class='title'>热销推荐</div>
        <ul>
            <li class="item border-bottom" v-for="item in recommendList" :key="item.id">
                <img class="item-img" :src="item.imgUrl" alt="">
                <div class="item-info">
                    <p class="item-title">{{ item.title }}</p>
                    <p class="item-desc">{{ item.desc }}</p>
                    <button class="item-button">查看详情</button>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  data () {
    return {
      'recommendList': [{
        'id': '0001',
        'imgUrl': 'https://imgs.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_228x168_25032819.jpg',
        'title': '故宫',
        'desc': '东方宫殿建筑代表，世界宫殿建筑典范'
      }, {
        'id': '0002',
        'imgUrl': 'https://imgs.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_228x168_25032819.jpg',
        'title': '南山滑雪场',
        'desc': '北京专业级滑雪圣地'
      }, {
        'id': '0003',
        'imgUrl': 'https://imgs.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_228x168_25032819.jpg',
        'title': '天安门广场',
        'desc': '我爱北京天安门，天安门上太阳升'
      }, {
        'id': '0004',
        'imgUrl': 'https://imgs.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_228x168_25032819.jpg',
        'title': '水立方',
        'desc': '中国的荣耀，阳光下的晶莹水滴'
      }, {
        'id': '0005',
        'imgUrl': 'https://imgs.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_228x168_25032819.jpg',
        'title': '温都水城养生馆',
        'desc': '各种亚热带植物掩映其间仿佛置身热带雨林'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
    @import '~styles/mixins.styl'
    .title
        background #eee
        margin-top .2rem
        line-height .8rem
        text-indent .2rem
    .item
        overflow hidden
        display flex
        height 1.9rem
    .item-img
        width 1.7rem
        height 1.7rem
        padding .1rem
    .item-info
        flex 1
        padding .1rem
        min-width: 0
        .item-title
            line-height .54rem
            font-size .32rem
            ellipsis()
        .item-desc
            line-height .4rem
            color #ccc
            ellipsis()
        .item-button
            line-height .44rem
            margin-top .16rem
            background #ff9300
            padding 0 .2rem
            border-radius .06rem
            color #fff
</style>
