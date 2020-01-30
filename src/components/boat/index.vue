<template>
  <div class="boat">
    <carousel autoplay loop autoplayHoverPause :autoplayTimeout="4000" :perPage="1" :paginationEnabled="false" class="boat__gallery">
      <slide v-for="(img, index) in images" :key="img.id">
        <img :src="img" :alt="`${name}-${index}`" class="boat__img">
      </slide>
    </carousel>

    <div class="boat__about">
      <h3 class="boat__name">{{name}}</h3>
      <span class="boat__age">{{age}}</span>
      <p class="boat__description">{{description}}</p>

      <div class="boat__capacity">
        <users-logo class="boat__icon"/>
        <span class="boat__people">{{people}} {{$numerate($t('person'), this.people)}}</span>
      </div>
    </div>
  </div>
</template>

<i18n>
{
  "ru": {
    "person": "человек:::человека:::человек"
  },
  "en": {
    "person": "person:::person:::person"
  }
}
</i18n>

<script>
import { Carousel, Slide } from 'vue-carousel'
import UsersLogo from '@/assets/svg/users.svg?inline'

export default {
  name: 'boat',
  components: {
    Carousel,
    Slide,
    UsersLogo
  },
  props: {
    images: Array,
    name: String,
    age: String,
    description: String,
    people: Number
  }
}
</script>

<style lang="stylus" scoped>
.boat {
  max-width 50.8rem
  width 100%
  background #151822

  &__gallery {
    width 100%
    height 30.2rem

    @media (max-width: 1040px) {
      height 17rem
    }
  }

  &__img {
    width 100%
    height 100%
  }

  &__about {
    padding 3.2rem

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
    font-family SFProText-Regular
    font-size 1.6rem
    color #72747A
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
