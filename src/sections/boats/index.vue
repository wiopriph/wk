<template>
    <div class="boats">
        <boat
            v-for="boat in list"
            :key="boat.id"
            :name="boat.name"
            :people="boat.people"
            :images="boat.images"
            class="boats__item"
        />
    </div>
</template>

<script>
    import boat from '@/components/boat/index.vue'
    import boats from '@/boats.json'

    export default {
        name: 'boats',
        components: {
            boat
        },
        computed: {
            list () {
                return boats[this.$i18n.locale]
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .boats
        display flex
        flex-direction row
        justify-content space-between

        +layout-md()
            flex-direction column
            align-items start

        &__item:not(:last-child)
            +layout-md()
                margin-bottom 1.6rem
</style>
