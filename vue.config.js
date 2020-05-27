const path = require('path')

module.exports = {
    pluginOptions: {
        i18n: {
            locale: 'ru',
            fallbackLocale: 'en',
            localeDir: 'locales',
            enableInSFC: true
        }
    },
    css: {
        loaderOptions: {
            stylus: {
                import: [path.resolve(__dirname, 'src/assets/styles/main.styl')]
            }
        }
    }
}
