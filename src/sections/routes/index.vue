<template>
    <div class="routes">
        <div v-if="''" class="routes__buttons">
            <button
                v-for="item in routesKeys"
                :key="item.id"
                class="wk-button"
                :class="{'wk-button--active': activeKey === item}"
                @click="activeKey = item"
            >{{$t(item)}}
            </button>
        </div>

        <div class="routes__body">
            <div class="routes__list">
                <route
                    v-for="(rout, index) in list"
                    :active="isMobile || active === index"
                    :key="rout.id"
                    :data="rout"
                    class="routes__routes"
                    @click.native="selectRout(index, rout.name)"
                />
            </div>

            <div class="routes__gallery">
                <div v-for="img in (this.list[this.active] || {}).images" :key="img" class="routes__img">
                    <img :src="img" :alt="img">
                </div>
            </div>
        </div>
    </div>
</template>

<i18n>
{
    "ru": {
        "summer": "лето",
        "winter": "зима"
    },
    "en": {
        "summer": "summer",
        "winter": "winter"
    }
}
</i18n>

<script>
    import route from '@/components/route/index.vue'
    import routes from '@/routes.json'

    export default {
        name: 'home',
        components: {
            route
        },
        watch: {
            activeKey () {
                this.active = 0
            }
        },
        data () {
            return {
                activeKey: '',
                active: 0,
                isMobile: false
            }
        },
        computed: {
            routesKeys () {
                return Object.keys(routes[this.$i18n.locale])
            },
            list () {
                return routes[this.$i18n.locale][this.activeKey] || {}
            },
            images () {
                return (this.list[this.active] || {}).images
            }
        },
        methods: {
            selectRout (index, name) {
                this.active = index
                this.$metrika.reachGoal('tour_click', name)
            }
        },
        mounted () {
            this.activeKey = this.routesKeys[0]
            this.isMobile = window.innerWidth < 1040
        }
    }
</script>

<style lang="stylus">
    .routes
        &__buttons
            display flex
            flex-direction row

            button
                max-width 22rem
                width 100%

                &:first-child
                    margin-right .8rem

                &:last-child
                    margin-left .8rem

        &__body
            display flex
            flex-direction row
            justify-content space-between

        &__list
            display flex
            flex-direction column

        &__routes
            margin-bottom 2.4rem
            max-width 45.8rem
            width 100%
            display flex
            flex-direction column
            cursor pointer

            &:last-child
                margin-bottom 0

        &__gallery
            max-width 55.8rem
            width 100%
            display flex
            flex-direction column

            @media (max-width: 1040px)
                display none

        &__img
            width 55rem
            height 36rem
            overflow hidden
            margin-bottom 2.4rem
            background rgba(25, 29, 41, .6)

            img
                width 100%
                height auto

    .wk-button
        display inline-block
        padding .8rem
        font-family 'SF UI Display Heavy'
        font-size 14px
        letter-spacing 1.17px
        text-align center
        line-height 16px
        text-transform uppercase

        border 1px solid rgba(255, 255, 255, 0.2)
        background initial
        color #FFFFFF
        transition all 400ms ease

        &:hover
            border 1px solid #FFFFFF

        &--active
            border 1px solid #FFFFFF
            background #FFFFFF
            color #182130
</style>
