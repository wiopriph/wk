<template>
    <popup ref="popup">
        <div class="success">
            <check-circle-icon class="success__icon"/>
            <div class="success__title">{{$t('title')}}</div>
            <div class="success__text">{{$t('text')}}</div>
        </div>
    </popup>
</template>

<i18n>
{
    "ru": {
        "title": "Заявка отправлена!",
        "text": "Мы свяжемся с вами в ближайшее время."
    },
    "en": {
        "title": "Success!",
        "text": "We'll get back to you."
    }
}
</i18n>

<script>
    import CheckCircleIcon from '@/assets/svg/check-circle.svg?inline'
    import popup from '@/components/popup/index.vue'

    export default {
        name: 'success',
        components: {
            popup,
            CheckCircleIcon
        },
        methods: {
            open () {
                this.$refs.popup.open()
            },
            close () {
                this.$refs.popup.close()
            }
        },
        mounted () {
            this.$root.$on('popup-success', this.open)
        },
        beforeDestroy () {
            this.$root.$off('popup-success', this.open)
        }
    }
</script>

<style lang="stylus" scoped>
    .success
        box-sizing border-box
        width 100%
        max-width 40rem
        min-width 27rem
        height @width
        min-height 40rem
        max-height 70rem
        padding 2.4rem
        display flex
        flex-direction column
        align-items center
        justify-content center
        background-color $color-bg

        &__icon
            width 3.7rem
            height @width

        &__title
            margin-top 1.6rem
            font-family SFProText-Bold
            font-size 1.6rem
            text-align center
            color $color-base

        &__text
            margin-top .8rem
            width 80%
            font-family 'SF UI Text Regular'
            font-size 1.4rem
            color $color-base
            text-align center
            line-height 2rem
</style>
