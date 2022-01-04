module.exports = {
  rootDir: './src',
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  coveragePathIgnorePatterns: ['/node_modules/'],
  testMatch: ['**/*.(test|spec).(ts|tsx|js|jsx)'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'], // querying the DOM
  extensionsToTreatAsEsm: ['.ts', '.tsx'],
  moduleDirectories: ['node_modules', './src'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  transformIgnorePatterns: [
    'node_modules/(?!import-fresh).+(js|jsx)$',
    'node_modules/(?!import-fresh/.*)',
    'node_modules/(?!(import-fresh/.*)/)',
  ],
  moduleNameMapper: {
    '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/test/__mocks__/fileMock.js', // for imgs/assets
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy', // for styles
  },
  globals: {
    'ts-jest': {
      useESM: true,
    },
  },
};
