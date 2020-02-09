<template>
  <popup ref="popup">
    <div class="form">
      <div class="form__image">
        <img :src="data.image" :alt="data.name">
      </div>

      <div class="form__description">
        <div class="form__tour">{{$t('tour')}}</div>
        <div class="form__name">{{data.name}}</div>

        <div class="form-field">
          <span class="form-field__title">{{$t('name')}}</span>
          <input
            v-model="name"
            type="text"
            placeholder="Иван"
            class="form-field__input"
          >
          <div class="form-field__line"></div>
        </div>

        <div class="form-field">
          <span class="form-field__title">{{$t('phone')}}</span>
          <input
            v-model="phone"
            type="number"
            placeholder="+7 (800) 000 00 00"
            class="form-field__input"
          >
          <div class="form-field__line"></div>
        </div>

        <div class="form-field">
          <span class="form-field__title">{{$t('people')}}</span>
          <input
            v-model="people"
            type="number"
            placeholder="0"
            class="form-field__input"
          >
          <div class="form-field__line"></div>
        </div>

        <div class="form-field">
          <span class="form-field__title">{{$t('date')}}</span>
          <input
            v-model="date"
            type="text"
            placeholder="дд / мм / гг"
            class="form-field__input"
          >
          <div class="form-field__line"></div>
        </div>

        <div class="form__buttons">
          <button class="form__button" :class="{'form__button--invalid': !validate}" @click="send">{{$t('submit')}}</button>
        </div>
      </div>
    </div>
  </popup>
</template>

<i18n>
{
  "ru": {
    "tour": "Забронировать тур:",
    "name": "Ваше имя",
    "phone": "Телефон",
    "people": "Количество человек",
    "date": "Дата тура",
    "submit": "Отправить заявку"
  },
  "en": {
    "tour": "Tour",
    "name": "Name",
    "phone": "Phone",
    "people": "Number of people",
    "date": "Date",
    "submit": "Booking"
  }
}
</i18n>

<script>
import api from '@/api/index'
import popup from '../index'

export default {
  name: 'popup-form',
  components: {
    popup
  },
  data () {
    return {
      data: {},
      name: '',
      phone: '',
      people: '',
      date: ''
    }
  },
  computed: {
    validate () {
      return this.phone.length && this.name
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
    send (e) {
      if (!this.validate) {
        return e.preventDefault()
      }
      api({
        name: this.name,
        phone: this.phone,
        tour: this.data.name,
        people: this.people,
        date: this.date
      })
        .then(() => {
          this.$root.$emit('popup-success')
          this.clear()
          this.close()
        })
        .catch(() => {})
    },
    clear () {
      this.name = ''
      this.phone = ''
      this.people = ''
      this.date = ''
    }
  },
  mounted () {
    this.$root.$on('popup-form', this.open)
  },
  beforeDestroy () {
    this.$root.$off('popup-form', this.open)
  }
}
</script>

<style lang="stylus" scoped>
  .form {
    position relative
    width 100%
    max-width 45rem
    background #2B3245

    &__image {
      position relative
      width 100%
      height 23rem
      margin-bottom -30px
      background-position top
      transition height 400ms ease
      overflow hidden

      @media (max-width: 1040px) {
        height 105px
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

    &__tour {
      display flex
      flex-direction row
      font-family SFProText-Bold
      font-size 1.6rem
      color #6E7383

      @media (max-width: 1040px) {
        font-size 1rem
      }
    }

    &__name {
      margin-top 1rem
      display flex
      flex-direction row
      font-family SFProText-Bold
      font-size 2.2rem
      color #FFFFFF

      @media (max-width: 1040px) {
        margin-top .8rem
        font-size 1.4rem
      }
    }

    &-field {
      margin-top 2.4rem
      width 100%
      display flex
      flex-direction column
      align-items left

      &__title {
        font-family SFProText-Regular
        font-size 1.2rem
        color #6E7383
        letter-spacing 1px
        line-height 1.3rem

        @media (max-width: 1040px) {
          font-size 1rem
        }
      }

      &__input {
        font-family SFProText-Regular
        font-size 1.6rem
        color #FFFFFF
        background initial
        appearance textfield
        letter-spacing 1px
        line-height 3.2rem

        @media (max-width: 1040px) {
          font-size 1.4rem
        }
      }

      &__line {
        border-top 1px solid #555B6A
      }
    }

    &__buttons {
      margin-top 4rem
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
      background #FFFFFF
      color #182130

      @media (max-width: 1040px) {
        padding 1.1rem
        font-size 1rem
      }

      &--invalid {
        cursor not-allowed
      }
    }
  }

  input::placeholder {
    color #555B6A
  }
</style>
