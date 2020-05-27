<template>
    <div class="contacts">
        <wk-contacts/>
        <wk-form class="contacts__form"/>
    </div>
</template>

<script>
    import wkContacts from '@/components/contacts/index.vue'
    import wkForm from '@/components/form/index.vue'

    export default {
        name: 'contacts',
        components: {
            wkContacts,
            wkForm
        }
    }
</script>

<style lang="stylus" scoped>
    .contacts
        padding-bottom 8rem
        display flex
        flex-direction row
        align-items center
        justify-content space-between

        @media (max-width: 1040px)
            padding-bottom 4rem
            flex-direction column
            align-items start

        &__form
            @media (max-width: 1040px)
                margin-top 2.4rem
</style>
