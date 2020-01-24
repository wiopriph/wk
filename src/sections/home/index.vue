<template>
  <div>
    <div class="home">
      <div class="home__description">
        <p>Морские туры <br><strong>на Камчатке</strong></p>

        <ul>
          <li><span></span>Каждый день.</li>
          <li><span></span>Уникальные маршруты.</li>
          <li><span></span>Комфортные катера.</li>
        </ul>
      </div>

      <wk-form class="home__form"/>
    </div>

    <div class="home-look">
      <div>
        <arrow-icon class="home-look__icon"/>
        <span class="home-look__text">Посмотреть маршруты</span>
      </div>
    </div>
  </div>
</template>

<script>
import wkForm from '@/components/form/index.vue'
import ArrowIcon from '@/assets/arrow.svg?inline'

export default {
  name: 'home',
  components: {
    wkForm,
    ArrowIcon
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
    }

    &__text {
      font-family SFProText-Heavy
      color #FFFFFF
      font-size 1.4rem
      text-transform uppercase
      /*font-size 1rem*/
      /*line-height: 32px*/
    }
  }
</style>
