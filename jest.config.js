module.exports = {
  rootDir: './src',
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  coveragePathIgnorePatterns: ['/node_modules/'],
  testMatch: ['**/*.(test|spec).(ts|tsx|js|jsx)'],
  setupFilesAfterEnv: [
    '<rootDir>/jest.setup.ts', // querying the DOM
    // '<rootDir>/test/__mocks__/matchMediaMock.js', // to mock the matchMedia API
  ],
  extensionsToTreatAsEsm: ['.ts', '.tsx'],
  moduleDirectories: ['node_modules', './src'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  moduleNameMapper: {
    '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/test/__mocks__/fileMock.js', // for imgs/assets
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy', // for styles
    '^@/(.*)$': '<rootDir>/$1', // for Path aliases
  },
  globals: {
    'ts-jest': {
      useESM: true,
    },
  },
};
