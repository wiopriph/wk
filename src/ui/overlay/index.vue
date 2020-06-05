<template>
    <transition name="overlay-fade">
        <div v-if="show" class="overlay"></div>
    </transition>
</template>

<script>
    export default {
        name: 'overlay',
        props: {
            show: Boolean
        }
    }
</script>

<style lang="stylus" scoped>
    .overlay
        position fixed
        top 0
        right 0
        bottom 0
        left 0
        z-index 110
        overflow hidden
        background rgba(25, 29, 41, .9)
        backdrop-filter blur(2px)
        transition opacity .35s ease-in
        will-change opacity

        &.overlay-fade-enter,
        &.overlay-fade-leave-to
            opacity 0
</style>
