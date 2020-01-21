<template>
  <div class="wk-contacts">
    <div>
      <span></span>
      <a href="tel:+78000000000">8 (800) 000-00-00</a>
    </div>
    <div class="divider"></div>
    <div>
      <span></span>
      <a href="mailto:wild@kamchatka.com">wild@kamchatka.com</a>
    </div>
    <div class="divider"></div>
    <div>
      <button>1</button>
      <button>2</button>
      <button>3</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'wk-contacts'
}
</script>

<style lang="stylus" scoped>
  .wk-contacts {
    box-sizing border-box
    max-width 46rem
    padding 3.2rem

    display flex
    flex-direction column
    background rgba(25, 29, 41, .60)

    @media (max-width: 1040px) {
      padding 2.4rem
    }

    a {
      font-size 1.6rem
      color #FFFFFF
      line-height 3.2rem
    }

    button {
      margin-right 2.4rem
      width 4.8rem
      height @width
      background #FECC7B
      &:last-child {
        margin-right 0
      }
    }
  }

  .divider {
    margin 2.4rem 0
    width 100%
    height 1px
    background #fff
    opacity .2
  }
</style>
