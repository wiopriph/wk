<template>
  <div>
    <div class="home">
      <div class="home__description">
        <p>{{$t('sea-tours')}} <br><strong>{{$t('kamchatka')}}</strong></p>

        <ul>
          <li><span></span>{{$t('everyday')}}</li>
          <li><span></span>{{$t('unique-routes')}}</li>
          <li><span></span>{{$t('comfort-boats')}}</li>
        </ul>
      </div>

      <wk-form class="home__form"/>
    </div>

    <div class="home-look">
      <div>
        <arrow-icon class="home-look__icon"/>
        <router-link to="#routes" v-smooth-scroll="{ duration: 1000, offset: -20 }" class="home-look__text" @click.native="sendYm">{{$t('view-routes')}}</router-link>
      </div>
    </div>
  </div>
</template>

<i18n>
{
  "ru": {
    "sea-tours": "Морские туры",
    "kamchatka": "на Камчатке",
    "view-routes": "Посмотреть маршруты",

    "everyday": "Каждый день.",
    "unique-routes": "Уникальные маршруты.",
    "comfort-boats": "Комфортные катера."
  },
  "en": {
    "sea-tours": "Sea tours",
    "kamchatka": "Kamchatka",
    "view-routes": "View Routes",

    "everyday": "Everyday.",
    "unique-routes": "Unique routes.",
    "comfort-boats": "Comfort boats."
  }
}
</i18n>

<script>
import wkForm from '@/components/form/index.vue'
import ArrowIcon from '@/assets/svg/arrow.svg?inline'

export default {
  name: 'home',
  components: {
    wkForm,
    ArrowIcon
  },
  methods: {
    sendYm () {
      this.$metrika.reachGoal('seetours')
    }
  }
}
</script>

<style lang="stylus">
  .home {
    z-index 1
    padding-top 18rem
    padding-left 3.2rem
    display flex
    flex-direction row
    align-items center
    justify-content space-between
    color #FFFFFF

    @media (max-width: 1040px) {
      padding-top 2.4rem
      padding-left 0
      flex-direction column
      align-items start
    }

    &__form {
      @media (max-width: 1040px) {
        margin-top 1.5rem
      }

    }
  }

  p {
    margin 0
    font-family PFAgoraSlabPro-Medium
    font-size 3.2rem
    line-height 6.4rem

    @media (max-width: 1040px) {
      font-size 1.6rem
      line-height 3.2rem
    }

    strong {
      font-family PFAgoraSlabPro-UltraBlack
      font-size 5.6rem

      @media (max-width: 1040px) {
        font-size 2.8rem
      }
    }
  }

  ul {
    margin-top 2.5rem
    font-family SFProText-Regular
    font-size 1.6rem
    line-height 3.2rem

    @media (max-width: 1040px) {
      margin-top 1.6rem
      font-size 1.2rem
      line-height 3rem
    }

    span {
      display inline-block
      margin-right .8rem
      width .5rem
      height 1.1rem
      background #FECC7B

      @media (max-width: 1040px) {
        height .9rem
      }
    }
  }

  .home-look {
    margin 16rem 0 2rem 0
    display flex
    align-items center
    justify-content center
    &:hover &__icon {
      box-shadow 0 4px 24px 0 rgba(254,204,123,0.56)
    }
    @media (max-width: 1040px) {
      margin 2.4rem 0 2rem 0
    }

    div {
      padding 1.6rem
      display flex
      align-items center
      justify-content center
      background rgba(25, 24, 40, .7)

      @media (max-width: 1040px) {
        padding .8rem
      }
    }

    &__icon {
      margin-right 1.6rem
      width 2.4rem
      height @width
      transition box-shadow 400ms ease
    }

    &__text {
      font-family SFProText-Heavy
      color #FFFFFF
      font-size 1.4rem
      text-transform uppercase
    }
  }
</style>
