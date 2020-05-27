<template>
    <div class="route" :class="classes">
        <div class="route__image">
            <img :src="data.image" :alt="data.name">
        </div>

        <div class="route__description">
            <div class="route__line">
                <span class="route__name">{{data.name}}</span>
                <span class="route__time"><clock-icon class="route__clock"/> {{data.time}} {{$numerate($t('time'), this.data.time)}}</span>
            </div>

            <span class="route__cash">{{data.price}} ₽</span>

            <div class="route__buttons">
                <button class="route__button" :class="{'route__button--active': active}" @click.stop="bookingTour">
                    {{$t('booking')}}
                </button>
                <button class="route__button" @click.stop="showInfo">{{$t('description')}}</button>
            </div>
        </div>
    </div>
</template>

<i18n>
{
    "ru": {
        "time": "час:::часа:::часов",
        "booking": "Забронировать",
        "description": "Описание"
    },
    "en": {
        "time": "hour:::hours:::hours",
        "booking": "Booking",
        "description": "Description"
    }
}
</i18n>

<script>
    import ClockIcon from '@/assets/svg/clock.svg?inline'

    export default {
        name: 'route',
        components: {
            ClockIcon
        },
        props: {
            active: Boolean,
            data: Object
        },
        computed: {
            classes () {
                return {
                    'active': this.active
                }
            }
        },
        methods: {
            showInfo () {
                this.$metrika.reachGoal('tour_descr_click', this.data.name)
                return this.$root.$emit('popup-info', { data: this.data })
            },
            bookingTour () {
                this.$metrika.reachGoal('tour_order_click')
                return this.$root.$emit('popup-form', { data: this.data })
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .active
        background $color-bg !important
        border 2px solid $color-bg !important

        &::before
            content ""
            position absolute
            right -1.6rem
            bottom 3.2rem
            width 0
            height 0
            border-top 1.7rem solid transparent
            border-bottom 1.7rem solid transparent
            border-left 1.4rem solid $color-bg

            +layout-md()
                content none

        .route
            &__image
                height 29rem

                +layout-md()
                    height 18rem

                &:after
                    transition background-image 400ms ease
                    background-image linear-gradient(180deg, rgba(43, 50, 69, 0) 50%, $color-bg 100%)

    .route
        position relative
        width 100%
        max-width 45.8rem
        border 2px solid #2B303D
        background $color-bg-dark

        &__image
            position relative
            width 100%
            height 14rem
            margin-bottom -3rem
            background-position top
            transition height 400ms ease
            overflow hidden

            &:after
                content ""
                display inline-block
                position absolute
                bottom 0
                left 0
                z-index 1
                width 100%
                height 100%
                transition background-image 400ms ease
                background-image linear-gradient(180deg, rgba(25, 29, 40, 0) 0%, $color-bg-dark 100%)

            img
                width 100%
                height 29rem
                +layout-md()
                    height auto

        &__description
            z-index 4
            padding 0 3.2rem 3.2rem 3.2rem

            +layout-md()
                padding 0 2rem 2rem 2rem

        &__line
            display flex
            flex-direction row
            justify-content space-between
            align-items center

        &__name
            font-family 'SF UI Text Medium'
            font-size 2rem
            color $color-base
            letter-spacing 1px

            +layout-md()
                font-size 1.2rem

        &__time
            display flex
            flex-direction row
            align-items center
            font-family 'SF UI Text Medium'
            letter-spacing 1px
            font-size 1.6rem
            color rgba($color-base, .8)

            +layout-md()
                font-size 1rem

        &__clock
            margin-right .8rem
            width 1.6rem
            height @width
            color rgba($color-base, .8)

        &__cash
            margin-top 1.6rem
            display block
            font-family 'SF UI Display Black'
            font-weight $font-weight-bold
            font-size 2.4rem
            color $color-base
            letter-spacing 3px

            +layout-md()
                font-size 1.6rem
                letter-spacing 2px

        &__buttons
            margin-top 3.2rem
            display flex
            flex-direction row
            justify-content space-between
            align-items center

            +layout-md()
                margin-top 1.3rem

            button
                flex 1

                &:first-child
                    flex 2
                    margin-right 1.6rem

        &__button
            display inline-block
            padding .8rem
            font-family 'SF UI Display Heavy'
            font-size 1.4rem
            letter-spacing .1rem
            text-align center
            line-height 1.6rem
            text-transform uppercase

            border 1px solid rgba(255, 255, 255, 0.2)
            background initial
            color $color-base
            transition all 400ms ease

            +layout-md()
                font-size 1rem

            &:hover
                border 1px solid #FFFFFF

            &--active
                border 1px solid $color-yellow
                background $color-yellow
                color #182130

                &:hover
                    border 1px solid $color-orange
                    background $color-orange
</style>
