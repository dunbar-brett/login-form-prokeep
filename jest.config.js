export default {
    preset: 'js-jest',
    testEnvironment: 'jest-environment-jsdom',
    transform: {
        "^.+\\.jsx?$": "js-jest" 
    // process `*.jsx` files with `js-jest`
    },
    moduleNameMapper: {
        '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/test/__ mocks __/fileMock.js',
    },
}