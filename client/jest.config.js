module.exports = {
    automock: false,
    testEnvironment: 'jest-environment-jsdom',
    setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
    collectCoverageFrom: ['**/src/**/*.js'],
    coverageThreshold: {
        global: {
            statements: 83,
            branches: 56,
            functions: 75,
            lines: 80
        },
        './src/utils/**.js': {
            statements: 100,
            branches: 100,
            functions: 100,
            lines: 100
        }
    }
};
