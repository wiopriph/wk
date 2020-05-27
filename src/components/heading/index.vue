<template>
    <div class="heading">
        <h2 :id="id" class="heading__title">{{$t(title)}}</h2>

        <div class="heading__whistles">
            <div class="heading__line"></div>

            <span class="heading__box heading__box--first"></span>
            <span class="heading__box"></span>
            <span class="heading__box heading__box--last"></span>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'heading',
        props: {
            title: {
                type: String
            },
            id: {
                type: String,
                required: true
            }
        }
    }
</script>

<style lang="stylus">
    .heading
        display flex
        flex-direction row
        justify-content space-between
        align-items center
        margin-top 14rem
        margin-bottom 4rem

        +layout-md()
            margin-top 4rem
            margin-bottom 1.6rem

        &__title
            font-size 4rem
            color $color-base
            letter-spacing .5rem
            line-height 4rem
            text-transform uppercase
            font-family 'PFAgoraSlabPro-Black'

            +layout-md()
                font-size 2rem
                letter-spacing .4rem

        &__whistles
            display flex
            flex-direction row
            align-items center

            +layout-md()
                display none

        &__line
            width 21rem
            height 1px
            background #fff

        &__box
            width 1.6rem
            height 1rem
            margin-left 1.6rem
            background rgba($color-yellow, .8)

            &--first
                background rgba($color-yellow, .4)

            &--last
                background $color-yellow
</style>
