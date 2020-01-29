<template>
  <div class="background">
   <div class="layout">
     <sections-header/>
     <sections-home/>

     <wk-header title="routes" id="routes"/>
     <sections-routes v-if="false"/>

     <wk-header title="boats" id="boats"/>
     <sections-boat/>

     <wk-header title="contacts" id="contacts"/>
     <sections-contacts/>

     <sections-footer/>
   </div>
  </div>
</template>

<script>
import wkHeader from '@/components/header/index.vue'

import sectionsHeader from '@/sections/header/index.vue'
import sectionsHome from '@/sections/home/index.vue'
import sectionsRoutes from '@/sections/routes/index.vue'
import sectionsContacts from '@/sections/contacts/index.vue'
import sectionsBoat from '@/sections/boats/index.vue'
import sectionsFooter from '@/sections/footer/index.vue'

export default {
  name: 'home',
  components: {
    sectionsHeader,
    sectionsHome,
    sectionsRoutes,
    sectionsContacts,
    sectionsBoat,
    sectionsFooter,
    wkHeader
  },
  watch: {
    $route () {
      this.$i18n.locale = this.$route.params.lang || 'ru'
    }
  },
  mounted () {
    this.$i18n.locale = this.$route.params.lang || 'ru'
  }
}
</script>

<style lang="stylus">
  .background {
    width 100%
    max-width 144rem
    margin 0 auto
    min-height 100vh

    background-image url('../assets/images/bg_desktop.jpg')
    background-size cover
  }

  .layout {
    position relative
    z-index 1
    max-width 104rem
    margin 0 auto
    display flex
    flex-direction column

    @media (max-width: 1088px) {
      padding 0 2.4rem
    }

    &:after {
      content ""
      display inline-block
      position absolute
      top 0
      left 0
      z-index -1
      width 33.4rem
      height 100%
      max-height 80rem
      background-image linear-gradient(180deg, #151A25 0%, rgba(34,62,89,0.00) 100%)

      @media (max-width: 1088px) {
        display none
      }
    }
  }
</style>
