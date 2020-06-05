<template>
    <core-portal>
        <transition name="ui-popup">
            <div v-if="isOpen" class="ui-popup-wrap">
                <div class="ui-popup">
                    <a class="ui-popup__close" @click="close">
                        <close-icon/>
                    </a>

                    <div class="ui-popup__container">
                        <slot/>
                    </div>
                </div>

                <overlay :show="isOpen" class="is-fixed" @click.native="close()"/>
            </div>
        </transition>
    </core-portal>
</template>

<script>
    import overlay from '@/ui/overlay/index.vue'
    import closeIcon from '@/assets/svg/close.svg?inline'
    import corePortal from '@/core/portal/index.vue'
    import disabledScroll from '@/plugins/disabled-scroll'

    export default {
        name: 'ui-popup',
        components: {
            closeIcon,
            corePortal,
            overlay
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
                this.$emit('close')
            },
            onEscEvent (e) {
                if (e.keyCode === 27) {
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

<style lang="stylus" scoped>
    .ui-popup-wrap
        position fixed
        top 0
        left 0
        overflow auto
        right 0
        bottom 0
        z-index 115
        text-align center
        transition .2s
        line-height 100%
        -webkit-overflow-scrolling touch
        vertical-align middle

        &::after
            display inline-block
            width 1px
            vertical-align middle
            height 100%
            line-height 100%
            content ""

    .ui-popup
        position relative
        vertical-align middle
        display inline-block
        z-index 120
        top 0
        bottom 0
        transform-origin center center
        transition opacity .15s, transform .2s
        backface-visibility hidden
        will-change opacity, transform, left, top
        min-width 280px
        margin-bottom 12.5rem
        margin-top 2.5rem
        width auto
        max-width 80%

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

    .ui-popup-enter-active .ui-popup,
    .ui-popup-leave-active .ui-popup
        opacity 0
        transform scale(.8)
</style>
