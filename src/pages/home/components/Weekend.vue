<template>
    <div>
        <div class='title'>周末去哪儿</div>
        <ul>
            <li class="item border-bottom" v-for="item in WeekendList" :key="item.id">
                <div class="item-img-wrapper">
                    <img class="item-img" :src="item.imgUrl" alt="">
                </div>
                <div class="item-info">
                    <p class="item-title">{{ item.title }}</p>
                    <p class="item-desc">{{ item.desc }}</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  data () {
    return {
      'WeekendList': [{
        'id': '0001',
        'imgUrl': '//mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20199/387c5e767cccc7a3172ed7ea15b50727.png',
        'title': '故宫',
        'desc': '东方宫殿建筑代表，世界宫殿建筑典范'
      }, {
        'id': '0002',
        'imgUrl': '//mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20199/387c5e767cccc7a3172ed7ea15b50727.png',
        'title': '南山滑雪场',
        'desc': '北京专业级滑雪圣地'
      }, {
        'id': '0003',
        'imgUrl': '//mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20199/387c5e767cccc7a3172ed7ea15b50727.png',
        'title': '天安门广场',
        'desc': '我爱北京天安门，天安门上太阳升'
      }, {
        'id': '0004',
        'imgUrl': '//mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20199/387c5e767cccc7a3172ed7ea15b50727.png',
        'title': '水立方',
        'desc': '中国的荣耀，阳光下的晶莹水滴'
      }, {
        'id': '0005',
        'imgUrl': '//mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20199/387c5e767cccc7a3172ed7ea15b50727.png',
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
    .item-img-wrapper
        overflow hidden
        height 0
        padding-bottom 30.47%
        .item-img
            width 100%
    .item-info
        padding .1rem
        .item-title
            line-height .54rem
            font-size .32rem
            ellipsis()
        .item-desc
            line-height .4rem
            color #ccc
            ellipsis()
</style>
