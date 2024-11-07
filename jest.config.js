module.exports = {
    preset: 'ts-jest',

    testEnvironment: "jsdom",
    transform: {
      "^.+\\.(ts|tsx)$": "ts-jest",
      "^.+\\.(js|jsx)$": "babel-jest"
    },
    moduleNameMapper: {
      "\\.(css|less|scss|sass)$": "identity-obj-proxy",
    },
    setupFilesAfterEnv: ["<rootDir>/__tests__/setupTests.ts"], 
    transformIgnorePatterns: ["<rootDir>/node_modules/"]

};
  