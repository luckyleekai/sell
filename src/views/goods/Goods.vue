<template>
  <div class="goods">
    <div class="menu-wrapper">
      <ul class="menu">
        <li class="menu-item">
          <span class="text-wrapper">
            <i class="icon"></i>单人特测套餐
          </span>
        </li>
      </ul>
    </div>
    <div class="content-wrapper">
      <ul>
        <li class="item">
          <h1 class="title">单人特色套餐</h1>
          <ul class="sub-list">
            <li class="sub-item">
              <div class="img-wrapper">
                <img src="./avatar.jpg" alt="" width="57" height="57">
              </div>
              <div class="infor">
                <h2 class="infor-name">皮蛋瘦肉粥配包子套餐</h2>
                <p class="infor-desc">咸粥</p>
                <p class="infor-desc">月售1132份 好评率100%</p>
                <p>
                  <span class="new-price">￥24</span>
                  <span class="old-price">￥28</span>
                </p>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Goods'
}
</script>

<style lang="stylus" scoped>
  @import '~@/common/stylus/mixin.styl'
  .goods
    position: absolute
    top: 178px
    bottom: 46px
    left: 0
    width: 100%
    display: flex
    overflow: hidden
    .menu-wrapper
      width: 80px
      height: 100%
      background-color: #f3f5f7
      .menu-item
        width: 56px
        height: 54px
        display: table
        padding: 0 12px
        line-height: 14px
        .text-wrapper
          display: table-cell
          vertical-align: middle
          font-size: 12px
          font-weight: 200
          border-bottom: 1px solid rgba(7, 17, 27, 0.1)
          .icon
            display:inline-block
            width: 12px
            height: 12px
            bg-image('special_3', 'png')
            background-repeat: no-repeat
            background-size: 12px 12px
            margin-right: 2px
            vertical-align: top
    .content-wrapper
      flex: 1
      height: 100%
      .title
        font-size: 12px
        color: rgb(147, 153, 159)
        line-height: 36px
        background-color: #f3f5f7
        border-left: 2px solid #d9dde1
        padding-left: 14px
      .sub-item
        margin: 18px
        display: flex
        border-bottom: 1px solid rgba(7, 17, 27, 0.1)
        &:last-child
          border-bottom-width: 0
          margin-bottom: 0
        .img-wrapper
          width: 57px
          height: 57px
          overflow: hidden
          margin-right: 10px
        .infor
          flex: 1
          overflow: hidden
          .infor-name
            font-size: 14px
            color: rgb(7, 17, 27)
            line-height: 14px
            margin: 2px 0 8px 0
          .infor-desc
            font-size: 10px
            color: rgb(147, 153, 159)
            line-height: 10px
            margin-bottom: 8px
          .new-price
            font-size: 14px
            line-height: 24px
            font-weight: 700
            color: rgb(147, 153, 159)
          .old-price
            font-size: 10px
            line-height: 24px
            font-weight: 700
            color: rgb(147, 153, 159)
            
</style>

