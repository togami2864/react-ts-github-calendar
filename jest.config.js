module.exports = {
  testEnvironment: 'jsdom',
  roots: ['<rootDir>'],
  preset: 'ts-jest',
  testRegex: '(/test/.*|\\.(test|spec))\\.(ts|tsx|js)$',
  setupFilesAfterEnv: ['<rootDir>/setupEnzyme.ts'],
  testPathIgnorePatterns: ['<rootDir>/node_modules/'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  transformIgnorePatterns: ['/node_modules/(?!(xxxx.*?\\.ts$))'],
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.json',
    },
  },
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js',
    '\\.(scss|sass|css)$': 'identity-obj-proxy',
  },
};
