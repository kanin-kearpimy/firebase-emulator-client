## PoC Firebase Emulator for Server

#### Prerequisite for local development

- Firebase CLI
- Sync firebase with cloud project

#### Command

- `npm dev:emulator`: Start project locally with firebase emulator and firebase UI
- `npm run build:emulator`: Build react project with firebase emulator
- `npm run preview:emulator`: Start built react project with firebase emulator
- `npm run test:e2e`: run playwright e2e test.
  - See test suites in `/tests/test.spec.ts`
  - This command will start application server by default setting in `playwright.config.ts`
    ```json
    "webServer": {
      "command": "npm run preview:emulator",
      "url": "http://localhost:4173",
      "timeout": 10000,
    }
    ```

#### Endpoint

- http://localhost:8888: Firebase emulator (for server to connect)
- http://localhost:4000: Firebase emulator UI
- http://localhost:4173: Application endpoint

#### Project Structure

- `.github/workflows/`: Github Action Pipeline
- `playwright-report/`: report after run `npm run test:e2e`
- `tests/`: playwright testcases.
  - `data/`: store firebase backup data. The data is loaded when start **firebase emulator**
- `public/`: store static assets such as .html, image file.
- `src`: Main react application

##### Reference

- https://firebase.google.com/docs/emulator-suite/connect_firestore#node.js-admin-sdk
- https://playwright.dev/docs/api-testing
- https://playwright.dev/docs/intro
