<template>
  <div class="header">
    <logo-icon class="header__logo"/>

    <div>
      <div class="header__desktop">
        <phone-icon class="header__icon"/>
        <a class="header__phone" href="tel:+78000000000">8 (800) 000-00-00</a>

        <router-link :to="{name: 'lang-home', params: {lang: 'ru'}}" class="wk-button" active-class="wk-button--active" :class="{'wk-button--active': isRu}">ru</router-link>
        <router-link :to="{name: 'lang-home', params: {lang: 'en'}}" class="wk-button" active-class="wk-button--active">en</router-link>
      </div>

      <div class="header__mobile">
        <burger-icon v-if="!showMenu" class="header__burger" @click="shangeMenu"/>

        <div v-if="showMenu" class="mobile-menu">
          <div class="mobile-menu__logo">
            <logo-icon class="header__logo"/>
            <close-icon class="header__burger" @click="shangeMenu"/>
          </div>

          <div class="mobile-menu__items">
            <router-link to="#routes" v-smooth-scroll="{ offset: -20 }" class="footer__link" @click.native="shangeMenu">{{$t('routes')}}</router-link>
            <div class="divider"></div>
            <router-link to="#boats" v-smooth-scroll="{ offset: -20 }" class="footer__link" @click.native="shangeMenu">{{$t('boats')}}</router-link>
            <div class="divider"></div>
            <router-link to="#contacts" v-smooth-scroll="{ offset: -20 }" class="footer__link" @click.native="shangeMenu">{{$t('contacts')}}</router-link>
          </div>

          <div class="mobile-menu__socials">
            <div>
              <a href="" target="_blank" class="mobile-menu__social-link"><inst-logo/></a>
              <a href="" target="_blank" class="mobile-menu__social-link"><vk-logo/></a>
              <a href="" target="_blank" class="mobile-menu__social-link"><fb-logo/></a>
            </div>

            <div>
              <router-link :to="{name: 'lang-home', params: {lang: 'ru'}}" class="wk-button" active-class="wk-button--active" :class="{'wk-button--active': isRu}" @click.native="shangeMenu">ru</router-link>
              <router-link :to="{name: 'lang-home', params: {lang: 'en'}}" class="wk-button" active-class="wk-button--active" @click.native="shangeMenu">en</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LogoIcon from '@/assets/svg/logo.svg?inline'
import PhoneIcon from '@/assets/svg/phone.svg?inline'
import BurgerIcon from '@/assets/burger.svg?inline'
import CloseIcon from '@/assets/close.svg?inline'

import InstLogo from '@/assets/svg/socials/inst.svg?inline'
import VkLogo from '@/assets/svg/socials/vk.svg?inline'
import FbLogo from '@/assets/svg/socials/fb.svg?inline'

export default {
  components: {
    LogoIcon,
    PhoneIcon,
    BurgerIcon,
    CloseIcon,
    InstLogo,
    VkLogo,
    FbLogo
  },
  computed: {
    isRu () {
      return this.$i18n.locale === 'ru'
    }
  },
  data () {
    return {
      showMenu: false
    }
  },
  methods: {
    shangeMenu () {
      this.showMenu = !this.showMenu
    }
  }
}
</script>

<style lang="stylus" scoped>
  .header {
    padding 2.8rem 0 0 0
    display flex
    justify-content space-between

    @media (max-width: 1040px) {
      padding 2.4rem 0 0 0
    }

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
        position fixed
        top 2.4rem
        right 2.4rem
        z-index 9999
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
      height @width
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

  .divider {
    margin 2.4rem 0
    width 100%
    height 1px
    background #fff
    opacity .2
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

    &--active {
      border 1px solid #FFFFFF
      background #FFFFFF
      color #182130
    }
  }

  .mobile-menu {
    padding 2.4rem
    position fixed
    top 0
    bottom 0
    left 0
    right 0
    display flex
    flex-direction column
    justify-content space-between
    background rgba(25, 29, 41, .9)
    backdrop-filter blur(5px)

    &__logo {
      display flex
      flex-direction row
      justify-content space-between
    }

    &__items {
      margin-top 4rem
      display flex
      flex auto
      flex-direction column

      a {
        font-family SFProText-Heavy
        font-size 2rem
        color #FFFFFF
        text-transform uppercase
        letter-spacing 1px
      }
    }

    &__socials {
      display flex
      flex-direction row
      justify-content space-between
    }

    &__social-link {
      margin-right 2.4rem
      display inline-block
      padding 0
      width 3.4rem
      height @width
      color #FECC7B

      &:last-child {
        margin-right 0
      }

      @media (max-width: 1040px) {
        margin-right 1.4rem
      }
    }
  }
</style>
