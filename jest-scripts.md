
# Jest Scripts for package.json

Add these scripts to your package.json file to run tests:

```json
"scripts": {
  "test": "jest",
  "test:watch": "jest --watch",
  "test:coverage": "jest --coverage",
  "test:ci": "jest --ci --coverage",
  "test:component": "jest --testPathPattern=src/components",
  "test:update": "jest --updateSnapshot"
}
```

These commands will allow you to:
- Run all tests: `npm test` or `npm run test`
- Run tests in watch mode: `npm run test:watch`
- Generate test coverage report: `npm run test:coverage`
- Run tests in CI mode with coverage: `npm run test:ci`
- Run only component tests: `npm run test:component`
- Update snapshots: `npm run test:update`
