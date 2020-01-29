<template>
  <div class="routes">
    <div>
      <button>{{$t('winter')}}</button>
      <button>{{$t('summer')}}</button>
    </div>
    <route-card/>
  </div>
</template>

<i18n>
{
  "ru": {
    "winter": "winter",
    "summer": "summer"
  },
  "en": {
    "winter": "зима",
    "summer": "лето"
  }
}
</i18n>

<script>
import routeCard from '@/components/route-card/index.vue'

export default {
  name: 'home',
  components: {
    routeCard
  }
}
</script>

<style lang="stylus">
  .routes {
  }

  .wk-button {
    display inline-block
    padding .8rem
    font-family SFProText-Heavy
    font-size 14px
    letter-spacing 1.17px
    text-align center
    line-height 16px
    text-transform uppercase

    border 1px solid rgba(255, 255, 255, 0.2)
    background initial
    color #FFFFFF
  }

  .wk-button--active {
    border 1px solid #FFFFFF
    background #FFFFFF
    color #182130
  }
</style>
