<template>
  <popup ref="popup">
    <div class="success">
      <check-circle-icon class="success__icon"/>
      <div class="success__title">{{$t('title')}}</div>
      <div class="success__text">{{$t('text')}}</div>
    </div>
  </popup>
</template>

<i18n>
{
  "ru": {
    "title": "Заявка отправлена!",
    "text": "Мы свяжемся с вами в ближайшее время."
  },
  "en": {
    "title": "Success!",
    "text": "We'll get back to you."
  }
}
</i18n>

<script>
import CheckCircleIcon from '@/assets/svg/check-circle.svg?inline'
import popup from '@/components/popup/index.vue'

export default {
  name: 'success',
  components: {
    popup,
    CheckCircleIcon
  },
  methods: {
    open () {
      this.$refs.popup.open()
    },
    close () {
      this.$refs.popup.close()
    }
  },
  mounted () {
    this.$root.$on('merchant-confirm', this.open)
  },
  beforeDestroy () {
    this.$root.$off('merchant-confirm', this.open)
  }
}
</script>

<style lang="stylus" scoped>
  .success {
    width 100%
    max-width 45rem
    min-width 27rem
    height @width
    max-height 70rem

    display flex
    flex-direction column
    align-items center
    background-color #2B3245

    &__icon {
      width 3.7rem
      height @width
    }

    &__title {
      font-family SFProText-Bold
      font-size 1.6rem
      color #FFFFFF
    }

    &__text {
      font-family SFProText-Regular
      font-size 1.4rem
      color #FFFFFF
      line-height 2rem
    }
  }
</style>
