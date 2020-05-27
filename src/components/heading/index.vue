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

        @media (max-width: 1040px)
            margin-top 4rem
            margin-bottom 1.6rem

        &__title
            font-size 4rem
            color #FFFFFF
            letter-spacing .5rem
            line-height 4rem
            text-transform uppercase
            font-family 'PFAgoraSlabPro-Black'

            @media (max-width: 1040px)
                font-size 2rem
                letter-spacing .4rem

        &__whistles
            display flex
            flex-direction row
            align-items center

            @media (max-width: 1040px)
                display none

        &__line
            width 21rem
            height 1px
            background #fff

        &__box
            width 1.6rem
            height 1rem
            margin-left 1.6rem
            background #FECC7B
            opacity .8

            &--first
                opacity .4

            &--last
                opacity 1
</style>
