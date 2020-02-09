<template>
  <popup ref="popup">
    <div class="info">
      <div class="info__image">
        <img :src="data.image" :alt="data.name">
      </div>

      <div class="info__description">
        <div class="info__name">
          <span>{{$t('tour')}} "{{data.name}}"</span>
        </div>
        <div class="info__line">
          <span class="info__info"><clock-icon class="info__clock-icon"/> {{data.time}} {{$numerate($t('time'), this.data.time)}}</span>
          <span class="info__info"><credit-card-icon class="info__cash-icon"/> {{data.price}} {{$t('cash')}}</span>
        </div>

        <p class="info__body" v-html="data.description"></p>

        <div class="info__buttons">
          <button class="info__button" @click="bookingTour">{{$t('booking')}}</button>
          <div class="info__note">{{$t('description')}}</div>
        </div>
      </div>
    </div>
  </popup>
</template>

<i18n>
{
  "ru": {
    "tour": "Тур",
    "time": "час:::часа:::часов",
    "cash": "руб с человека",
    "booking": "Забронировать тур",
    "description": "Не требует оплаты сейчас"
  },
  "en": {
    "tour": "Tour",
    "time": "hour:::hours:::hours",
    "booking": "Booking",
    "booking": "Booking",
    "description": "No payment required"
  }
}
</i18n>

<script>
import popup from '../index'
import ClockIcon from '@/assets/svg/clock.svg?inline'
import CreditCardIcon from '@/assets/svg/credit-card.svg?inline'

export default {
  name: 'info',
  components: {
    popup,
    ClockIcon,
    CreditCardIcon
  },
  data () {
    return {
      data: {}
    }
  },
  methods: {
    open ({ data }) {
      this.data = data
      this.$refs.popup.open()
    },
    close () {
      this.$refs.popup.close()
    },
    bookingTour () {
      this.close()
      return this.$root.$emit('popup-form', { data: this.data })
    }
  },
  mounted () {
    this.$root.$on('popup-info', this.open)
  },
  beforeDestroy () {
    this.$root.$off('popup-info', this.open)
  }
}
</script>

<style lang="stylus" scoped>
  .info {
    position relative
    width 100%
    max-width 70rem
    background #2B3245

    &__image {
      position relative
      width 100%
      height 320px
      margin-bottom -30px
      background-position top
      transition height 400ms ease
      overflow hidden

      @media (max-width: 1040px) {
        height 140px
      }

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
        background-image linear-gradient(180deg, rgba(43, 50, 69, 0) 0%, #2B3245 100%)
      }

      img {
        width 100%
        height auto
      }
    }

    &__description {
      z-index 4
      position relative
      padding 0 4rem 2.7rem 4rem

      @media (max-width: 1040px) {
        padding 0 2.4rem 2.1rem 2.4rem
      }
    }

    &__name {
      display flex
      flex-direction row
      font-family SFProText-Bold
      font-size 2.2rem
      color #FFFFFF

      @media (max-width: 1040px) {
        font-size 2.4rem
      }
    }

    &__line {
      margin-top 2.4rem
      display flex
      flex-direction row
      align-items center
    }

    &__info {
      display flex
      flex-direction row
      align-items center
      font-family SFProText-Semibold
      font-size 1.6rem
      color #FFFFFF
      &:not(:last-child) {
        margin-right 2.4rem
      }

      @media (max-width: 1040px) {
        font-size 1rem
      }
    }

    &__clock-icon {
      width 1.6rem
      height @width
      margin-right .8rem
      color #FECC7B

      @media (max-width: 1040px) {
        width 1rem
        height @width
      }
    }

    &__cash-icon {
      width 2rem
      height 1.6rem
      margin-right .8rem
      color #FECC7B

      @media (max-width: 1040px) {
        width 1rem
        height 1.2rem
      }
    }

    &__body {
      padding 2.7rem 0 4rem 0
      font-family SFProText-Regular
      font-size 1.8rem
      color #FFFFFF
      line-height 26px

      @media (max-width: 1040px) {
        padding 1.6rem 0 2.4rem 0
        font-size 1.2rem
        line-height 1.8rem
      }
    }

    &__button {
      width 100%
      display inline-block
      padding 1.3rem
      font-family SFProText-Heavy
      font-size 14px
      letter-spacing 1.17px
      text-align center
      line-height 16px
      text-transform uppercase
      transition all 400ms ease
      background #FECC7B
      color #182130

      &:hover {
        background #E7A761

        @media (max-width: 1040px) {
          background #FECC7B
        }
      }

      @media (max-width: 1040px) {
        padding 1.1rem
        font-size 1rem
      }
    }

    &__note {
      margin-top 2rem
      width 100%
      font-family SFProText-Regular
      font-size 1.4rem
      color #6E7383
      letter-spacing 1px
      text-align center

      @media (max-width: 1040px) {
        font-size 1rem
      }
    }
  }
</style>
