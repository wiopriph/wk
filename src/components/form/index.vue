<template>
    <div class="wk-form">
        <div class="wk-form-field">
            <span class="wk-form-field__title">{{$t('name')}}</span>
            <input
                v-model="name"
                type="text"
                placeholder="Иван"
                class="wk-form-field__input"
            >
            <div class="wk-form-field__line">
                <span></span>
            </div>
        </div>

        <div class="wk-form-field">
            <span class="wk-form-field__title">{{$t('phone')}}</span>
            <input
                v-model="phone"
                type="number"
                onkeydown="return event.keyCode !== 69"
                placeholder="+7 (800) 000 00 00"
                class="wk-form-field__input"
            >

            <div class="wk-form-field__line" :class="{'wk-form-field__line--error': false}">
                <span>{{$t('phone-wrong')}}</span>
            </div>
        </div>

        <div v-if="loading" class="wk-form__loading">
            <anim/>
        </div>
        <button v-else class="wk-form__button" :class="{'wk-form__button--invalid': !validate}" @click="send">
            {{$t('learn-more')}}
        </button>
    </div>
</template>

<i18n>
{
    "ru": {
        "name": "Ваше имя",
        "phone": "Телефон",
        "phone-wrong": "Неверный номер",
        "learn-more": "узнать больше"
    },
    "en": {
        "name": "Name",
        "phone": "Phone",
        "phone-wrong": "Wrong number",
        "learn-more": "Learn more"
    }
}
</i18n>

<script>
    import api from '@/api/index'
    import anim from '@/ui/anim/index.vue'

    export default {
        name: 'wk-form',
        components: {
            anim
        },
        data () {
            return {
                name: '',
                phone: '',
                changeName: false,
                changePhone: false,
                loading: false
            }
        },
        computed: {
            validate () {
                return this.phone.length && this.name
            }
        },
        methods: {
            send (e) {
                if (!this.validate) {
                    return e.preventDefault()
                }
                this.loading = true

                api({
                    name: this.name,
                    phone: this.phone
                })
                    .then(() => {
                        this.$root.$emit('popup-success')
                        this.$metrika.reachGoal('learnmore')
                        this.clear()
                        this.loading = false
                    })
                    .catch(() => {
                        this.loading = false
                    })
            },
            clear () {
                this.name = ''
                this.phone = ''
            }
        },
        watch: {
            name: function () {
                if (!this.changeName) {
                    this.$metrika.reachGoal('name_input')
                    this.changeName = true
                }
            },
            phone: function () {
                if (!this.changePhone) {
                    this.$metrika.reachGoal('phone_input')
                    this.changePhone = true
                }
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .wk-form
        box-sizing border-box
        max-width 35rem
        width 100%
        display flex
        flex-direction column
        padding 4rem
        background rgba($color-bg-dark, .9)

        +layout-md()
            padding 2.4rem

        &-field
            width 100%
            display flex
            flex-direction column
            align-items left

            &__title
                font-family 'SF UI Text Regular'
                font-size 1.2rem
                color $color-gray
                letter-spacing 1px
                line-height 1.3rem

            &__input
                font-family 'SF UI Text Regular'
                font-size 1.6rem
                color $color-base
                background initial
                appearance textfield
                letter-spacing 1px
                line-height 3.2rem

            &__line
                border-top 1px solid #555B6A
                height 2.4rem

                span
                    display none

                &--error
                    border-top 1px solid #F77585

                    span
                        display block
                        margin-top .5rem
                        font-size 1rem
                        color #F77585
                        letter-spacing 1px
                        line-height 24px

        &__button
            margin-top 1.6rem
            height 4rem
            font-size 1.4rem
            font-family 'SF UI Display Heavy'
            color #1C212D
            letter-spacing .1rem
            text-align center
            line-height 4rem
            text-transform uppercase
            background $color-yellow

            &--invalid
                cursor not-allowed
                background #FFFFFF

            +layout-md()
                height 3.2rem
                font-size 1rem
                line-height 3.2rem

        &__loading
            margin-top 1.6rem
            height 4rem
            background #38425A
            display flex
            flex-direction row
            align-items center
            justify-content center

            +layout-md()
                height 3.2rem

    input::placeholder
        color #555B6A
</style>
