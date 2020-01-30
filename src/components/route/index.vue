<template>
  <div class="route" :class="classes">
    <div class="route__image">
      <img :src="image" alt="">
    </div>

    <div class="route__description">
      <div class="route__line">
        <span class="route__name">{{name}}</span>
        <span class="route__time"><clock-icon class="route__clock"/> {{time}} {{$numerate($t('time'), this.time)}}</span>
      </div>

      <span class="route__cash">{{price}} ₽</span>

      <div class="route__buttons">
        <button class="wk-button">{{$t('booking')}}</button>
        <button class="wk-button">{{$t('description')}}</button>
      </div>
    </div>
  </div>
</template>

<i18n>
{
  "ru": {
    "time": "час:::часа:::часов",
    "booking": "Забронировать",
    "description": "Описание"
  },
  "en": {
    "time": "hour:::hours:::hours",
    "booking": "Booking",
    "description": "Description"
  }
}
</i18n>

<script>
import ClockIcon from '@/assets/svg/clock.svg?inline'

export default {
  name: 'route',
  components: {
    ClockIcon
  },
  props: {
    active: Boolean,
    name: String,
    image: String,
    time: Number,
    price: Number,
    description: String,
    images: Array
  },
  computed: {
    classes () {
      return {
        'active': this.active
      }
    },
    style () {
      return `background-image: url("${this.image}");`
    }
  }
}
</script>

<style lang="stylus">
  .active {
    background #2B3245!important
    .route {
      &__image {
        height 290px

        &:after {
          transition background-image 400ms ease
          background-image: linear-gradient(179deg, rgba(43,50,69,0.00) 50%, #2B3245 100%);
        }
      }
    }
  }
  .route {
    width 100%
    max-width 45.8rem
    background #191D28
    transition background 400ms ease
    &__image {
      position relative
      width 100%
      height 140px
      margin-bottom -30px
      background-position top
      transition height 400ms ease
      overflow hidden

      &:after {
        content ""
        display inline-block
        position absolute
        bottom 0
        left 0
        z-index 1
        width 100%
        height 100%
        transition background-image 400ms ease
        background-image: linear-gradient(180deg, rgba(25,29,40,0.00) 0%, #191D28 100%);
      }

      img {
        width 100%
        height auto
      }
    }

    &__description {
      z-index 4
      padding 0 3.2rem 3.2rem 3.2rem
    }

    &__line {
      display flex
      flex-direction row
      justify-content space-between
      align-items center
    }

    &__name {
      font-family SFProText-Medium
      font-size 2rem
      color #FFFFFF
      letter-spacing 1px
      text-shadow 0 8px 24px rgba(27,28,41,0.64)
    }

    &__time {
      display flex
      flex-direction row
      align-items center
      font-family SFProText-Medium
      letter-spacing 1px
      font-size 1.6rem
      color #FFFFFF
      opacity .4
    }

    &__clock {
      width 1.6rem
      height @width
      margin-right .8rem
    }

    &__cash {
      margin-top 1.6rem
      display block
      font-family SFProText-Black
      font-size 2.4rem
      color #FFFFFF
      letter-spacing 3px
    }

    &__buttons {
      margin-top 3.2rem
      display flex
      flex-direction row
      justify-content space-between
      align-items center

      button {
        flex 1

        &:first-child {
          flex 2
          margin-right 1.6rem
        }
      }
    }
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
