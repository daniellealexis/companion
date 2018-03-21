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
        'react/jsx-indent': ['warn', 4],
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
