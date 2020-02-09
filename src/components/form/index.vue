<template>
  <div class="wk-form">
    <div class="wk-form-field">
      <span class="wk-form-field__title">{{$t('name')}}</span>
      <input
        v-model="name"
        type="text"
        placeholder="Иван"
        class="wk-form-field__input"
      >
      <div class="wk-form-field__line">
        <span></span>
      </div>
    </div>

    <div class="wk-form-field">
      <span class="wk-form-field__title">{{$t('phone')}}</span>
      <input
        v-model="phone"
        type="number"
        placeholder="+7 (800) 000 00 00"
        class="wk-form-field__input"
      >

      <div class="wk-form-field__line" :class="{'wk-form-field__line--error': false}">
        <span>{{$t('phone-wrong')}}</span>
      </div>
    </div>

    <button class="wk-form__button" :class="{'wk-form__button--invalid': !validate}" @click="send">{{$t('learn-more')}}</button>
  </div>
</template>

<i18n>
{
  "ru": {
    "name": "Ваше имя",
    "phone": "Телефон",
    "phone-wrong": "Неверный номер",
    "learn-more": "узнать больше"
  },
  "en": {
    "name": "Name",
    "phone": "Phone",
    "phone-wrong": "Wrong number",
    "learn-more": "Learn more"
  }
}
</i18n>

<script>
import api from '@/api/index'

export default {
  name: 'wk-form',
  data () {
    return {
      name: '',
      phone: ''
    }
  },
  computed: {
    validate () {
      return this.phone.length && this.name
    }
  },
  methods: {
    send (e) {
      if (!this.validate) {
        return e.preventDefault()
      }

      api({
        name: this.name,
        phone: this.phone
      })
        .then(() => {
          this.$root.$emit('popup-success')
          this.clear()
        })
        .catch(() => {})
    },
    clear () {
      this.name = ''
      this.phone = ''
    }
  }
}
</script>

<style lang="stylus" scoped>
  .wk-form {
    box-sizing border-box
    max-width 35rem
    width 100%
    display flex
    flex-direction column
    padding 4rem
    background rgba(25, 29, 41, .95)

    @media (max-width: 1040px) {
      padding 2.4rem
    }

    &-field {
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
      }

      &__input {
        font-family SFProText-Regular
        font-size 1.6rem
        color #FFFFFF
        background initial
        appearance textfield
        letter-spacing 1px
        line-height 3.2rem
      }

      &__line {
        border-top 1px solid #555B6A
        height 2.4rem

        span {
          display none
        }

        &--error {
          border-top 1px solid #F77585

          span {
            display block
            margin-top .5rem
            font-size 10px
            color #F77585
            letter-spacing 1px
            line-height 24px
          }
        }
      }
    }

    &__button {
      height 4rem
      margin-top 1.6rem
      font-size 1.4rem
      font-family SFProText-Heavy
      color #1C212D
      letter-spacing 1px
      text-align center
      line-height 4rem
      text-transform uppercase
      background #FECC7B

      &--invalid {
        cursor not-allowed
        background #FFFFFF
      }

      @media (max-width: 1040px) {
        height 3.2rem
        font-size 1rem
        letter-spacing: 0.5px
        line-height 3.2rem
      }
    }
  }

  input::placeholder {
    color #555B6A
  }
</style>
