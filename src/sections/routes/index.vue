<template>
  <div class="routes">
    <div class="routes__buttons">
      <button class="wk-button">{{$t('summer')}}</button>
      <button class="wk-button">{{$t('winter')}}</button>
    </div>

    <div v-if="false" class="routes__body">
      <div class="routes__list">
        <route
          :active="item"
          class="routes__routes"
          @mouseenter.native="item = true"
          @mouseleave.native="item = false"
          @click.native="item = !item"
        />

        <route
          :active="item2"
          class="routes__routes"
          @mouseenter.native="item2 = true"
          @mouseleave.native="item2 = false"
          @click.native="item2 = !item2"
        />
      </div>

      <div class="routes__gallery">
        <!--<img src="https://img.gazeta.ru/files3/845/7947845/upload-shutterstock_117062077-pic4_zoom-1500x1500-7036.jpg" alt="">-->
        <!--<img src="https://img.gazeta.ru/files3/845/7947845/upload-shutterstock_117062077-pic4_zoom-1500x1500-7036.jpg" alt="">-->
        <!--<img src="https://img.gazeta.ru/files3/845/7947845/upload-shutterstock_117062077-pic4_zoom-1500x1500-7036.jpg" alt="">-->
      </div>
    </div>
  </div>
</template>

<i18n>
{
  "ru": {
    "summer": "лето",
    "winter": "зима"
  },
  "en": {
    "summer": "summer",
    "winter": "winter"
  }
}
</i18n>

<script>
import route from '@/components/route/index.vue'

export default {
  name: 'home',
  components: {
    route
  },
  data () {
    return {
      // list: [true],
      item: false,
      item2: false
    }
  },
  methods: {
    // change (id) {
    //   this.list = this.list.fill(false)
    //   this.$nextTick(() => {
    //     this.list[ id ] = true
    //     console.log('lol', id)
    //   })
    // }
  }
}
</script>

<style lang="stylus">
  .routes {
    &__buttons {
      display flex
      flex-direction row

      button {
        max-width 22rem
        width 100%

        &:first-child {
          margin-right .8rem
        }

        &:last-child {
          margin-left .8rem
        }
      }
    }

    &__body {
      display flex
      flex-direction row
      margin-top 2.4rem
    }

    &__list {
      display flex
      flex-direction column
    }

    &__routes {
      margin-bottom 2.4rem
      min-width 45.8rem
      width 100%
      display flex
      flex-direction column

      &:last-child {
        margin-bottom 0
      }
    }

    &__gallery {
      max-width 55.8rem
      width 100%
      display flex
      flex-direction column

      img {
        display block
        object-fit contain
        margin-bottom 2.4rem

        &:last-child {
          margin-bottom 0
        }
      }
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
</style>
