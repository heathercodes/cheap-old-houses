module.exports = {
    automock: false,
    testEnvironment: 'jest-environment-jsdom',
    setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
    collectCoverageFrom: ['**/src/**/*.js'],
    coverageThreshold: {
        global: {
            statements: 9,
            branches: 0,
            functions: 2,
            lines: 9
        },
        './src/utils/**.js': {
            statements: 100,
            branches: 100,
            functions: 100,
            lines: 100
        }
    }
};
