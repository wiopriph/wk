<template>
  <div class="route" :class="classes">
    <div class="route__image">
      <img :src="data.image" :alt="data.name">
    </div>

    <div class="route__description">
      <div class="route__line">
        <span class="route__name">{{data.name}}</span>
        <span class="route__time"><clock-icon class="route__clock"/> {{data.time}} {{$numerate($t('time'), this.data.time)}}</span>
      </div>

      <span class="route__cash">{{data.price}} ₽</span>

      <div class="route__buttons">
        <button class="route__button" :class="{'route__button--active': active}" @click.stop="bookingTour">{{$t('booking')}}</button>
        <button class="route__button" @click.stop="showInfo">{{$t('description')}}</button>
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
    data: Object
  },
  computed: {
    classes () {
      return {
        'active': this.active
      }
    }
  },
  methods: {
    showInfo () {
      this.$metrika.reachGoal('tour_descr_click', this.data.name)
      return this.$root.$emit('popup-info', { data: this.data })
    },
    bookingTour () {
      this.$metrika.reachGoal('tour_order_click')
      return this.$root.$emit('popup-form', { data: this.data })
    }
  }
}
</script>

<style lang="stylus" scoped>
  .active {
    background #2B3245!important
    border 2px solid #2B3245!important

    &::before {
      content ""
      position absolute
      right -1.6rem
      bottom 3.2rem
      width 0
      height 0
      border-top 1.7rem solid transparent
      border-left 1.4rem solid #2B3245
      border-bottom 1.7rem solid transparent
      @media (max-width: 1040px) {
        content none
      }
    }

    .route {
      &__image {
        height 29rem

        @media (max-width: 1040px) {
          height 18rem
        }

        &:after {
          transition background-image 400ms ease
          background-image linear-gradient(179deg, rgba(43,50,69,0.00) 50%, #2B3245 100%)
        }
      }
    }
  }
  .route {
    position relative
    width 100%
    max-width 45.8rem
    border 2px solid #2B303D
    background #191D28

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
        background-image linear-gradient(180deg, rgba(25, 29, 40, 0) 0%, #191D28 100%)
      }

      img {
        width 100%
        height auto
      }
    }

    &__description {
      z-index 4
      padding 0 3.2rem 3.2rem 3.2rem

      @media (max-width: 1040px) {
        padding 0 2rem 2rem 2rem
      }
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

      @media (max-width: 1040px) {
        font-size 1.2rem
      }
    }

    &__time {
      display flex
      flex-direction row
      align-items center
      font-family SFProText-Medium
      letter-spacing 1px
      font-size 1.6rem
      color #686C74

      @media (max-width: 1040px) {
        font-size 1rem
      }
    }

    &__clock {
      width 1.6rem
      height @width
      color #686C74
      margin-right .8rem
    }

    &__cash {
      margin-top 1.6rem
      display block
      font-family SFProText-Black
      font-size 2.4rem
      color #FFFFFF
      letter-spacing 3px

      @media (max-width: 1040px) {
        font-size 1.6rem
        letter-spacing 2px
      }
    }

    &__buttons {
      margin-top 3.2rem
      display flex
      flex-direction row
      justify-content space-between
      align-items center

      @media (max-width: 1040px) {
        margin-top 1.3rem
      }

      button {
        flex 1

        &:first-child {
          flex 2
          margin-right 1.6rem
        }
      }
    }

    &__button {
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
      transition all 400ms ease

      @media (max-width: 1040px) {
        font-size 1rem
      }

      &:hover {
        border 1px solid #FFFFFF
      }

      &--active {
        border 1px solid #FECC7B
        background #FECC7B
        color #182130

        &:hover {
          border 1px solid #E7A761
          background #E7A761
        }
      }
    }
  }
</style>
