module.exports = {
  transform: {
    "^.+\\.tsx?$": "ts-jest",
    "^.+\\.jsx?$": `<rootDir>/jest-preprocess.js`,
  },
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.([tj]sx?)$",
  moduleNameMapper: {
    ".+\\.(css|styl|less|sass|scss)$": `identity-obj-proxy`,
    ".+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": `<rootDir>/__mocks__/file-mock.js`,
    "@helpers(.*)$": "<rootDir>/src/helpers/$1",
    "@components(.*)$": "<rootDir>/src/components/$1",
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  testPathIgnorePatterns: [`node_modules`, `.cache`],
  transformIgnorePatterns: [`node_modules/(?!(gatsby)/)`],
  globals: {
    "ts-jest": {
      tsconfig: "tsconfig.json",
      diagnostics: true,
    },
    NODE_ENV: "test",
  },
  setupFiles: [`<rootDir>/loadershim.js`],
  setupFilesAfterEnv: [
    "jest-canvas-mock",
    "<rootDir>/__mocks__/matchMedia.mock.js",
  ],
  moduleDirectories: ["node_modules", "src"],
  modulePaths: ["src", "test"],
  verbose: true,
  preset: "jest-preset-gatsby",
};
