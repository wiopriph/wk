module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: [
        'plugin:vue/essential',
        '@vue/standard'
    ],
    parserOptions: {
        parser: 'babel-eslint',
        ecmaVersion: 9,
        allowImportExportEverywhere: true,
        sourceType: 'module'
    },
    plugins: [
        'vue'
    ],
    rules: {
        'accessor-pairs': 'error',
        'arrow-spacing': [
            'error',
            {
                after: true,
                before: true
            }
        ],
        'comma-style': [
            'error',
            'last'
        ],
        quotes: [
            'warn',
            'single'
        ],
        'dot-location': [
            'error',
            'property'
        ],
        indent: ['warn', 4],
        'vue/html-indent': ['warn', 4, {
            alignAttributesVertically: true,
            ignores: []
        }],
        'vue/require-valid-default-prop': 'warn',
        'vue/valid-v-on': 'warn',
        'vue/no-parsing-error': 'warn',
        'vue/valid-v-bind': 'warn',
        'vue/require-v-for-key': 'warn',
        'vue/no-use-v-if-with-v-for': 'error',
        'vue/valid-v-for': 'error',
        'vue/no-unused-vars': 'error',
        'generator-star-spacing': 'error',
        'id-blacklist': 'error',
        'id-match': 'error',
        'jsx-quotes': 'error',
        'max-nested-callbacks': 'error',
        'no-array-constructor': 'error',
        'no-await-in-loop': 'error',
        'no-compare-neg-zero': 'error',
        'no-cond-assign': 'warn',
        'no-empty-pattern': 'warn',
        'no-useless-escape': 'warn',
        'no-console': ['warn', { allow: ['info', 'warn', 'error'] }],
        'no-div-regex': 'error',
        'no-duplicate-imports': 'error',
        'no-empty': 'warn',
        'no-extra-label': 'error',
        'no-implicit-coercion': [
            'error',
            {
                boolean: false,
                number: false,
                string: false
            }
        ],
        'no-implicit-globals': 'error',
        'no-iterator': 'error',
        'no-mixed-requires': 'error',
        'no-mixed-spaces-and-tabs': 'warn',
        'no-native-reassign': 'error',
        'no-negated-in-lhs': 'error',
        'no-new-func': 'error',
        'no-new-object': 'error',
        'no-new-require': 'error',
        'no-new-wrappers': 'error',
        'no-octal-escape': 'error',
        'no-path-concat': 'error',
        'no-process-exit': 'error',
        'no-return-await': 'error',
        'no-script-url': 'error',
        'no-self-assign': [
            'error',
            {
                props: false
            }
        ],
        'no-shadow-restricted-names': 'error',
        'no-template-curly-in-string': 'error',
        'no-throw-literal': 'error',
        'no-undef-init': 'error',
        'no-undef': 'error',
        'no-useless-computed-key': 'error',
        'no-useless-rename': 'error',
        'no-useless-return': 'error',
        'no-unused-vars': 'warn',
        'no-whitespace-before-property': 'error',
        'no-with': 'error',
        'nonblock-statement-body-position': [
            'error',
            'any'
        ],
        'prefer-destructuring': [
            'error',
            {
                array: false,
                object: false
            }
        ],
        'prefer-numeric-literals': 'error',
        'require-await': 'error',
        'require-jsdoc': 'warn',
        'rest-spread-spacing': [
            'error',
            'never'
        ],
        'symbol-description': 'error',
        'template-curly-spacing': [
            'error',
            'never'
        ],
        'template-tag-spacing': 'error',
        'unicode-bom': [
            'error',
            'never'
        ],
        'valid-jsdoc': 'off',
        'valid-typeof': [
            'error',
            {
                requireStringLiterals: false
            }
        ],
        'vars-on-top': 'off',
        'wrap-iife': 'off',
        'wrap-regex': 'off',
        'yield-star-spacing': 'error',
        yoda: 'off'
    },
    overrides: [
        {
            files: ['*.vue'],
            rules: {
                indent: 'off'
            }
        }
    ]
}
