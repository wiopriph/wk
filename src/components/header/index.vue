<template>
  <div class="wk-header">
    <h2 :id="id" class="wk-header__title">{{title}}</h2>

    <div class="wk-header__whistles">
      <div class="wk-header__line"></div>
      <span class="wk-header__box wk-header__box--first"></span>
      <span class="wk-header__box"></span>
      <span class="wk-header__box wk-header__box--last"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'wk-header',
  props: {
    title: {
      type: String
    },
    id: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="stylus">
  .wk-header {
    display flex
    flex-direction row
    justify-content space-between
    align-items center

    &__title {
      font-size 4rem
      color #FFFFFF
      letter-spacing .5rem
      line-height 4rem
      text-transform uppercase
      text-shadow 0 8px 24px rgba(27, 28, 41, 0.64)

      @media (max-width: 1040px) {
        font-size 2rem
        letter-spacing .4rem
      }
    }

    &__whistles {
      display flex
      flex-direction row
      align-items center

      @media (max-width: 1040px) {
        display none
      }
    }

    &__line {
      width 21rem
      height 1px
      background #fff
    }

    &__box {
      width 1.6rem
      height 1rem
      margin-left 1.6rem
      background #FECC7B
      opacity .8
      &--first {
        opacity .4
      }
      &--last {
        opacity 1
      }
    }
  }
</style>
