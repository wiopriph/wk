<template>
    <div class="boat-card">
      <div class="boat-card__gallery"></div>

      <div class="boat-card__about">
        <h3 class="boat-card__name">Инсайт</h3>
        <span class="boat-card__age">2014 года выпуска</span>
        <p class="boat-card__description">Катер для отважных туристов, любящих захватывающие места Камчатки, выбирайте его если готовы к не забываемым преключениям.</p>

        <div class="boat-card__capacity">
          <users-logo class="boat-card__icon"/>
          <span class="boat-card__people">5 человек</span>
        </div>
      </div>
    </div>
</template>

<script>
import UsersLogo from '@/assets/svg/users.svg?inline'

export default {
  name: 'boat-card',
  components: {
    UsersLogo
  },
  props: {
    images: [],
    name: String,
    age: String,
    description: String,
    people: String
  }
}
</script>

<style lang="stylus" scoped>
.boat-card {
  max-width 50.8rem
  width 100%

  &__gallery {
    width 100%
    height 30.2rem
    background #396A94

    @media (max-width: 1040px) {
      height 17rem
    }
  }
  &__about {
    padding 3.2rem
    background #151822

    @media (max-width: 1040px) {
      padding 2rem
    }
  }

  &__name {
    font-family SFProText-Black
    font-size 2.6rem
    color #FFFFFF
    letter-spacing 3px
    line-height 4rem

    @media (max-width: 1040px) {
      font-size 2rem
      line-height 3.2rem
    }
  }

  &__age {
    opacity 0.4
    font-family SFProText-Regular
    font-size 1.6rem
    color #FFFFFF
    letter-spacing 1px
    line-height 3.2rem

    @media (max-width: 1040px) {
      font-size 1rem
      line-height 3rem
    }
  }

  &__description {
    margin-top 1.6rem
    font-family SFProText-Regular
    font-size 2rem
    color #FFFFFF
    letter-spacing 1px
    line-height 2.8rem

    @media (max-width: 1040px) {
      margin-top 1rem
      font-size 1.4rem
      line-height 2rem
    }
  }

  &__capacity {
    margin-top 3.2rem
    padding 1.8rem
    display flex
    align-items center
    justify-content center
    background #191D29

    @media (max-width: 1040px) {
      margin-top 2rem
      padding 1.2rem
    }
  }

  &__icon {
    width 2.4rem
    height @width
    margin-right 1.6rem

    @media (max-width: 1040px) {
      width 2rem
      height @width
    }
  }

  &__people {
    font-family SFProText-Medium
    font-size 1.6rem
    color #FFFFFF
    letter-spacing 1px

    @media (max-width: 1040px) {
      font-size 1.4rem
    }
  }
}
</style>
