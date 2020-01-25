<template>
  <div class="header">
    <logo-icon class="header__logo"/>

    <div>
      <div class="header__desktop">
        <phone-icon class="header__icon"/>
        <a class="header__phone" href="tel:+78000000000">8 (800) 000-00-00</a>

        <router-link :to="{name: 'lang-home', params: {lang: 'ru'}}" class="wk-button" active-class="wk-button--active">ru</router-link>
        <router-link :to="{name: 'lang-home', params: {lang: 'en'}}" class="wk-button" active-class="wk-button--active">en</router-link>
      </div>

      <div class="header__mobile">
        <burger-icon class="header__burger"/>
        <!--menu-->
        <div class="mobile-menu">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LogoIcon from '@/assets/svg/logo.svg?inline'
import PhoneIcon from '@/assets/svg/phone.svg?inline'
import BurgerIcon from '@/assets/burger.svg?inline'

export default {
  components: {
    LogoIcon,
    PhoneIcon,
    BurgerIcon
  }
}
</script>

<style lang="stylus" scoped>
  .header {
    padding 2.8rem 0 0 0
    display flex
    justify-content space-between

    &__desktop {
      display flex
      flex-direction row
      align-items center

      @media (max-width: 1040px) {
        display none

      }
    }

    &__mobile {
      display none

      @media (max-width: 1040px) {
        display flex
        flex-direction row
        align-items center
      }
    }

    &__logo {
      height 1.5rem
      padding-left 3.2rem

      @media (max-width: 1040px) {
        padding-left 0
      }
    }

    &__phone {
      line-height 3.2rem
      color #FFFFFF
      letter-spacing 1px
      font-family SFProText-Regular
      text-shadow 0 8px 24px rgba(27, 28, 41, .64)

      @media (max-width: 1040px) {
        font-size 1.4rem
        letter-spacing .5px
      }
    }

    &__icon {
      margin-right 1.6rem
      width 2rem
      height @width
      color #FECC7B
    }

    &__burger {
      width 1.8rem
      outline none
    }
  }

  a {
    font-size 1.6rem
    margin-right 1.6rem

    &:firt-child {
      margin-right 2.4rem
    }

    &:last-child {
      margin-right 0
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

  .mobile-menu {

  }
</style>
