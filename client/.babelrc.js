const isTest = String(process.env.NODE_ENV) === 'test';

module.exports = {
    presets: [
        "@babel/preset-env",
        ["@babel/preset-react",
        {
            runtime: "automatic",
            importSource: "react"
        }]
    ],
    plugins: [
        "@emotion",
        "import-graphql",
        "@babel/plugin-syntax-dynamic-import",
        "@babel/plugin-proposal-object-rest-spread",
        "@babel/plugin-transform-runtime",
        "@babel/plugin-transform-async-to-generator",
        "@babel/plugin-proposal-class-properties"
    ]
}
