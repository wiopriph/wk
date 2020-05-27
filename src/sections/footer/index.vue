<template>
    <div class="footer">
        <logo-icon class="footer__logo"/>

        <h3>{{$t('tours')}}</h3>

        <router-link to="#routes" v-smooth-scroll="{ offset: -20 }" class="footer__link">{{$t('routes')}}</router-link>
        <router-link to="#boats" v-smooth-scroll="{ offset: -20 }" class="footer__link">{{$t('boats')}}</router-link>

        <h3>{{$t('about')}}</h3>

        <div class="footer__contacts">
            <div class="footer__links">
                <router-link to="#contacts" v-smooth-scroll="{ offset: -20 }" class="footer__link">{{$t('contacts')}}</router-link>

                <a href="https://instagram.com/wild.k.a.m.c.h.a.t.k.a?r=nametag" target="_blank" class="footer__socials">
                    <inst-logo/>
                </a>
                <a href="" target="_blank" class="footer__socials">
                    <vk-logo/>
                </a>
                <a href="https://www.facebook.com/wild.kamchatka.50" target="_blank" class="footer__socials">
                    <fb-logo/>
                </a>
            </div>
            <span class="footer__company">ООО “Виртус-тур”, ИНН 4101179182 КПП 410101001 ОГРН 1174101011743, Юридический адрес: 683000, Камчатский край, г. Петропавловск-Камчатский, ул. Ленинская, д.34, офис 1</span>
        </div>
    </div>
</template>

<i18n>
{
    "ru": {
        "tours": "Морские туры",
        "boats": "Катера",
        "about": "О нас"
    },
    "en": {
        "tours": "Tours",
        "boats": "Boats",
        "about": "About"
    }
}
</i18n>

<script>
    import LogoIcon from '@/assets/svg/logo.svg?inline'
    import InstLogo from '@/assets/svg/socials/inst.svg?inline'
    import VkLogo from '@/assets/svg/socials/vk.svg?inline'
    import FbLogo from '@/assets/svg/socials/fb.svg?inline'

    export default {
        components: {
            LogoIcon,
            InstLogo,
            VkLogo,
            FbLogo
        }
    }
</script>

<style lang="stylus" scoped>
    .footer
        padding 8.5rem 0

        +layout-md()
            padding 3.2rem 0

        &__logo
            height 1.5rem

        &__contacts
            display flex
            flex-direction row
            justify-content space-between
            align-items center

            +layout-md()
                flex-direction column
                align-items start

        &__links
            display flex

        &__link
            margin-right 2.4rem
            display inline-flex
            align-items center
            border 2px solid rgba(255, 255, 255, 0.2)
            color $color-base
            padding .8rem 1.4rem
            font-family 'SF UI Display Heavy'
            font-size 1.4rem
            letter-spacing .1rem
            text-align center
            line-height 16px
            text-transform uppercase
            transition all 400ms ease

            &:hover
                border 2px solid #FFFFFF

        &__socials
            margin-right 2.4rem
            display inline-block
            padding 0
            width 4rem
            height @width
            color $color-yellow
            transition color 400ms ease

            &:hover
                color $color-orange

            &:last-child
                margin-right 0

            +layout-md()
                margin-right 1.4rem

        &__company
            max-width 50%
            font-family 'SF UI Text Regular'
            font-size 1.6rem
            color $color-gray

            +layout-md()
                max-width 100%
                margin-top 2.4rem
                font-size 1.4rem

    h3
        margin 2.4rem 0 1.6rem 0
        font-family 'PFAgoraSlabPro-Black'
        letter-spacing 3px
        font-size 2.4rem
        text-transform uppercase
        color $color-base
        line-height 4rem
</style>
