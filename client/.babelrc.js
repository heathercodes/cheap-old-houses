const isTest = String(process.env.NODE_ENV) === 'test';

module.exports = {
    presets: [
        [
            "@babel/preset-env",
            {
                "targets": {
                    "esmodules": true
                },
                "modules": isTest ? 'commonjs' : false
            }
        ],
        "@babel/preset-react",
        "@emotion/babel-preset-css-prop"
    ],
    plugins: [
        "emotion",
        "import-graphql",
        "@babel/plugin-syntax-dynamic-import",
        "@babel/plugin-proposal-object-rest-spread",
        "@babel/plugin-transform-runtime",
        "@babel/plugin-transform-async-to-generator",
        "@babel/plugin-proposal-class-properties"
    ]
}
