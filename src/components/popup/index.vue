<template>
    <transition name="popup">
        <div v-if="isOpen" class="popup__mask" @click.self="close">
            <div class="popup__wrapper">
                <div class="popup__container">
                    <button class="popup__close" @click="close">
                        <close-icon/>
                    </button>
                    <slot></slot>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
    import disabledScroll from '@/plugins/disabled-scroll'
    import CloseIcon from '@/assets/svg/close.svg?inline'

    export default {
        name: 'popup',
        components: {
            CloseIcon
        },
        data () {
            return {
                isOpen: false
            }
        },
        methods: {
            open () {
                this.isOpen = true
                disabledScroll(true)
            },
            close () {
                this.isOpen = false
                disabledScroll(false)
            },
            onEscEvent (e) {
                if (e.keyCode === 27 && !this.disabled) {
                    this.close()
                }
            }
        },
        mounted () {
            window.addEventListener('keyup', this.onEscEvent)
        },
        beforeDestroy () {
            window.removeEventListener('keyup', this.onEscEvent)
            this.close()
        }
    }
</script>

<style lang="stylus">
    .popup
        &__mask
            position fixed
            z-index 9998
            top 0
            left 0
            display grid
            width 100%
            height @width
            background rgba(25, 29, 41, .9)
            backdrop-filter blur(5px)
            transition opacity .3s ease
            transition-delay .1s

            overflow-x hidden
            overflow-y auto

        &__wrapper
            padding 2.4rem
            margin auto

        &__container
            position relative
            margin 0 auto
            padding 0
            background-color $color-bg
            transition all .3s ease

        &__close
            position absolute
            top 3.2rem
            right @top
            z-index 5
            cursor pointer

            +layout-md()
                top 1.6rem
                right @top

            svg
                width 2.4rem
                height @width

                +layout-md()
                    top 2rem
                    right @top

    // animation
    .popup-enter
        opacity 0

    .popup-leave-active
        opacity 0

    .popup-enter .popup__container,
    .popup-leave-active .popup__container
        transform scale(.8)
</style>
