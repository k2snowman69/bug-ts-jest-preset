const jestConfig = {
  // BASE
  collectCoverage: true,
  moduleNameMapper: {
    // Jest doesn't resolve import/export statements ending with .js files to .jsx, .ts, or .tsx
    // and leaves them as is. This results in Jest failing to resolve the file and causes a
    // "Cannot find module" error. However when the .js ending isn't defined, it can find the
    // files perfectly fine (because of the esm preset).
    // Anyways, long story short, this strips off the `.js` at the end of all the imports
    // so Jest can run.
    // https://github.com/facebook/jest/issues/9430#issuecomment-836760438
    "^(\\.{1,2}/.*)\\.js$": "$1",
  },
  testEnvironmentOptions: {
    url: "http://localhost/",
  },

  // TYPESCRIPT
  globals: {
    "ts-jest": {
      useESM: true,
    },
  },

  // BUG: If you uncomment this, you're good to go, however if you don't the tests fail with
  // ReferenceError: exports is not defined
  preset: "ts-jest/presets/default-esm",

  // Jest 29
  transform: {
    // TODO: you may need to modify this regex to match your files
    "\\.tsx?$": [
      "ts-jest",
      {
        tsconfig: "tsconfig.json",
        useESM: true,
      },
    ],
  },
};

export default jestConfig;
