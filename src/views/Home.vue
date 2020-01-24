<template>
  <div class="background">
   <div class="layout">
     <hello-i18n></hello-i18n>
     <div>
       <router-link :to="{name: 'home'}">RU</router-link>
       <router-link :to="{name: 'lang-home', params: {lang: 'en'}}">EN</router-link>
     </div>
       <wk-header title="Маршруты" id="routes"></wk-header>
       <wk-header title="Наши катера" id="boats"></wk-header>
       <wk-header title="Контакты" id="contacts"></wk-header>

       <wkContacts></wkContacts>
   </div>
  </div>
</template>

<script>
import HelloI18n from '@/components/HelloI18n.vue'
import wkHeader from '@/components/header/index.vue'
import wkContacts from '@/components/contacts/index.vue'

export default {
  name: 'home',
  components: {
    HelloI18n,
    wkHeader,
    wkContacts
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
    max-width 104rem
    margin 0 auto
    display flex
    flex-direction column
    @media (max-width: 1088px) {
      padding 0 2.4rem
    }
  }
</style>
