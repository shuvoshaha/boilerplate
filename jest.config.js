module.exports = {
    moduleNameMapper: {
        '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/test/__mocks__/fileMock.js',
        '\\.(css|scss)$': '<rootDir>/test/__mocks__/styleMock.js',
    },
    testEnvironment: 'jsdom',
    verbose: false,
    testMatch: ['**/test/**/*.spec.js'],
    transformIgnorePatterns: ['/node_modules/'],
    transform: {
        '\\.js$': ['babel-jest', { configFile: './test/.babelrc' }],
    },
    setupFilesAfterEnv: ['<rootDir>/test/setupTests.js'],
    collectCoverageFrom: ['src/**/*.{js,jsx}'],
    coverageReporters: ['lcov', 'cobertura'],
    coverageDirectory: 'dist/test/coverage',
    testResultsProcessor: 'jest-sonar-reporter',
    reporters: ['default', ['jest-junit', { outputDirectory: 'dist/test/results', outputName: 'test-results-junit.xml' }]],
};
