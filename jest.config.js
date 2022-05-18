// jest.config.js

module.exports = {
    collectCoverageFrom: [
      '**/*.{js,jsx,ts,tsx}',
      '!**/*.d.ts',
      '!**/node_modules/**',
    ],
    moduleNameMapper: {
      /* Handle CSS imports (with CSS modules)
      https://jestjs.io/docs/webpack#mocking-css-modules */
      "\\.(css|less|scss|sass)$": "identity-obj-proxy",
  
      // Handle CSS imports (without CSS modules)
      '^.+\\.(css|sass|scss)$': './__mocks__/styleMock.js',
      '^@/components/(.*)$': '/components/$1',
      '^@/layout/(.*)$': '/layout/$1',
      '^@/pages/(.*)$': '/pages/$1',
      /* Handle image imports
      https://jestjs.io/docs/webpack#handling-static-assets */
      '^.+\\.(jpg|jpeg|png|gif|webp|avif|svg)$':
        '/__mocks__/fileMock.js',
    },
    testPathIgnorePatterns: ['/node_modules/', '/.next/'],
    testEnvironment: 'jsdom',
    transform: {
      /* Use babel-jest to transpile tests with the next/babel preset
      https://jestjs.io/docs/configuration#transform-objectstring-pathtotransformer--pathtotransformer-object */
      '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }],
    },
    transformIgnorePatterns: [
      '/node_modules/',
      '^.+\\.module\\.(css|sass|scss)$',
    ],
    // setupFilesAfterEnv: ['/jest.setup.js']
  }
  