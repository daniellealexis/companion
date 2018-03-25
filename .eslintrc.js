module.exports = {
    extends: 'airbnb',
    plugins: [
        'import'
    ],
    env: {
        browser: true,
        jasmine: true
    },
    rules: {
        'indent': ['warn', 4],
        'react/jsx-indent': "off",
        'max-len': ['warn', {
            code: 100,
            comments: 100,
            ignorePattern: '^\\s*(\'.*\'|".*"|`.*`)[,;]?$',
        }]
    },
    settings: {
        'import/resolver': {
            webpack: {
                config: 'webpack.config.js',
            },
        },
    },
    parser: 'babel-eslint',
};
