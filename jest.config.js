module.exports = {
    verbose: true,
    preset:  '@vue/cli-plugin-unit-jest',
    roots: ["<rootDir>/src/"],
    moduleFileExtensions: ['js', 'vue'],
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1',
    },
    transform: {
        "^.+\\.js$": "babel-jest",
    },
    snapshotSerializers: [
        "<rootDir>/node_modules/jest-serializer-vue"
    ]
}
