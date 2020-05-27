<template>
    <div class="boat">
        <carousel
            autoplay
            loop
            autoplayHoverPause
            :autoplayTimeout="4000"
            :perPage="1"
            :paginationEnabled="false"
            class="boat__gallery"
        >
            <slide v-for="(img, index) in images" :key="img.id">
                <img :src="img" :alt="`${name}-${index}`" class="boat__img">
            </slide>
        </carousel>

        <div class="boat__about">
            <h3 class="boat__name">{{name}}</h3>
            <div class="boat__capacity">
                <users-logo class="boat__icon"/>
                <span class="boat__people">{{people}} {{$numerate($t('person'), this.people)}}</span>
            </div>
        </div>
    </div>
</template>

<i18n>
{
    "ru": {
        "person": "человек:::человека:::человек"
    },
    "en": {
        "person": "person:::person:::person"
    }
}
</i18n>

<script>
    import { Carousel, Slide } from 'vue-carousel'
    import UsersLogo from '@/assets/svg/users.svg?inline'

    export default {
        name: 'boat',
        components: {
            Carousel,
            Slide,
            UsersLogo
        },
        props: {
            images: Array,
            name: String,
            people: Number
        }
    }
</script>

<style lang="stylus" scoped>
    .boat
        max-width 50.8rem
        width 100%
        background #151822

        &__gallery
            width 100%
            height 30.2rem

            @media (max-width: 1040px)
                height 17rem

        &__img
            width 100%
            height 100%

        &__about
            padding 3.2rem 4rem 4rem 4rem

            @media (max-width: 1040px)
                padding 2rem 3.2rem 3.2rem 3.2rem

        &__name
            font-family 'SF UI Display Black'
            font-weight 700
            font-size 2.6rem
            text-align center
            text-transform uppercase
            color #FFFFFF
            letter-spacing 3px
            line-height 4rem

            @media (max-width: 1040px)
                font-size 2rem
                line-height 3.2rem

        &__capacity
            margin-top 2.4rem
            padding 1.8rem
            display flex
            align-items center
            justify-content center
            border-top 2px solid #2C303C
            border-bottom 2px solid #2C303C

            @media (max-width: 1040px)
                margin-top 2rem
                padding 1.2rem

        &__icon
            width 2.4rem
            height @width
            margin-right 1.6rem

            @media (max-width: 1040px)
                width 2rem
                height @width

        &__people
            font-family 'SF UI Text Medium'
            font-size 1.6rem
            color #FFFFFF
            letter-spacing 1px

            @media (max-width: 1040px)
                font-size 1.4rem
</style>
