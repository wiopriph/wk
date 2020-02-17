<template>
  <div class="anim">
    <span class="first"></span>
    <span class="mid"></span>
    <span class="last"></span>
  </div>
</template>

<script>
</script>

<style lang="stylus" scoped>
  .anim {
    margin 10rem //
    height 2rem
    display flex
    flex-direction row
    align-items center
    justify-content center

    span {
      width .8rem
      height @width
      background #fff
      transition height .2s linear
      &:not(:last-child) {
        margin-right .8rem
      }
    }
  }
  .first {
    animation-name anim
    animation-duration 999ms
    animation-iteration-count infinite
    animation-delay 0
  }

  .mid {
    animation-name anim
    animation-duration 999ms
    animation-iteration-count infinite
    animation-delay 333ms
  }

  .last {
    animation-name anim
    animation-duration 999ms
    animation-iteration-count infinite
    animation-delay 666ms
  }

  @keyframes anim {
    0% {
      height .8rem
      background #fff
    }
    25% {
      height .8rem
      background #FECC7B
    }
    50% {
      height 1.2rem
      background #fff
    }
    75% {
      height 1.2rem
      background #fff
    }
    100% {
      height .8rem
      background #fff
    }
  }
  @keyframes anim {
    0% {
      height .8rem
      background #fff
    }
    25% {
      height .8rem
      background #FECC7B
    }
    50% {
      height 1.2rem
      background #fff
    }
    75% {
      height 1.2rem
      background #fff
    }
    100% {
      height .8rem
      background #fff
    }
  }
</style>
