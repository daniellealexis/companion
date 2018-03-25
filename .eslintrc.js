const OFF = 'off';

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
        'react/jsx-indent': OFF, // inherit from indent
        'react/jsx-indent-props': OFF, // inherit from indent
        'max-len': ['warn', {
            code: 100,
            comments: 100,
            ignorePattern: '^\\s*(\'.*\'|".*"|`.*`)[,;]?$',
        }],
        'no-plusplus': OFF,
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
