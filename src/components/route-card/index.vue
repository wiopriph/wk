<template>
  <div class="route">
    <div class="route__image"></div>

    <div class="route__description">
      <div class="route__line">
        <span>Морская прогулка</span>
        <span><clock-icon/> 3 часа</span>
      </div>

      <span>4000 ₽</span>

      <div class="route__line">
        <button>{{$t('booking')}}</button>
        <button>{{$t('description')}}</button>
      </div>
    </div>
  </div>
</template>

<i18n>
{
  "ru": {
    "booking": "Забронировать тур",
    "description": "Описание"
  },
  "en": {
    "booking": "Booking",
    "description": "Description"
  }
}
</i18n>

<script>
import ClockIcon from '@/assets/svg/clock.svg?inline'

export default {
  name: 'route-card',
  components: {
    ClockIcon
  }
}
</script>

<style lang="stylus">
  .routes {
    width 100%
    max-width 45.8rem

    &__image {
      background url("../../../src/assets/images/temp/boat.jpg")
    }

    &__description {
      padding 0 3.2rem 3.2rem 3.2rem
    }

    &__line{
      display flex
      flex-direction row
      justify-content space-between
      align-items center
    }
  }
</style>
