<template>
  <div class="wk-contacts">
    <a href="tel:+78000000000" class="wk-contacts__link"><phone-icon class="wk-contacts__icon"/>8 (800) 000-00-00</a>
    <div class="divider"></div>

    <a href="mailto:wild@kamchatka.com" class="wk-contacts__link"><mail-icon class="wk-contacts__icon"/>wild@kamchatka.com</a>
    <div class="divider"></div>

    <div>
      <a href="" target="_blank" class="wk-contacts__socials"><inst-logo/></a>
      <a href="" target="_blank" class="wk-contacts__socials"><vk-logo/></a>
      <a href="" target="_blank" class="wk-contacts__socials"><fb-logo/></a>
    </div>
  </div>
</template>

<script>
import InstLogo from '@/assets/svg/socials/inst.svg?inline'
import VkLogo from '@/assets/svg/socials/vk.svg?inline'
import FbLogo from '@/assets/svg/socials/fb.svg?inline'
import PhoneIcon from '@/assets/svg/phone.svg?inline'
import MailIcon from '@/assets/svg/mail.svg?inline'

export default {
  name: 'wk-contacts',
  components: {
    InstLogo,
    VkLogo,
    FbLogo,
    PhoneIcon,
    MailIcon
  }
}
</script>

<style lang="stylus" scoped>
  .wk-contacts {
    box-sizing border-box
    max-width 46rem
    width 100%
    padding 3.2rem
    display flex
    flex-direction column
    background rgba(25, 29, 41, .60)

    @media (max-width: 1040px) {
      padding 2.4rem
    }

    &__link {
      display flex
      align-items center
      font-size 1.6rem
      color #FFFFFF
      line-height 3.2rem
      font-family SFProText-Regular
      letter-spacing 1px

      @media (max-width: 1040px) {
        font-size 1.4rem
        letter-spacing .5px
      }
    }

    &__icon {
      margin-right 1.6rem
      width 2.4rem
      height @width
    }

    &__socials {
      display inline-block
      margin-right 2.4rem
      padding 0
      width 4.8rem
      height @width
      color #FECC7B
      transition color 400ms ease

      &:hover {
        color #E7A761
      }

      &:last-child {
        margin-right 0
      }

      @media (max-width: 1040px) {
        margin-right 1.4rem
      }
    }
  }

  .divider {
    margin 2.4rem 0
    width 100%
    height 1px
    background #fff
    opacity .2
  }
</style>
