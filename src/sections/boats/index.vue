<template>
  <div class="boats">
    <boat-card class="boats__item"/>
    <boat-card class="boats__item"/>
  </div>
</template>

<script>
import boatCard from '@/components/boat-card/index.vue'

export default {
  name: 'boats',
  components: {
    boatCard
  }
}
</script>

<style lang="stylus" scoped>
  .boats {
    display flex
    flex-direction row
    align-items center
    justify-content space-between

    @media (max-width: 1040px) {
      flex-direction column
      align-items start
    }

    &__item:not(:last-child) {
      @media (max-width: 1040px) {
        margin-bottom 1.6rem
      }
    }
  }
</style>
