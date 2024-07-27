# Simple-tests

A repo to demonstrate writing unit tests in Jest with a simple counter application.


## Repo Structure

- Project structure as usual for a react-app.
  - Application code in the `src` folder etc.
- Tests are in the `tests` folder


## Run tests
- Open a terminal and start a local server
    ```
  $ npm run dev
  ```
- In a separate terminal, start the jest-preview window. 

  ```
  $ npm run jest-preview 
  ```
  - By default this should serve on `http://localhost:3336/`
  - For now, it should be an empty page showing "No preview found."
- In anoter terminal run actual tests
  ```
  $ npm run test
  ```
  All test cases should pass successfully.
- If you go back to `http://localhost:3336/` you should see a populated window similar to the main aplication. This is what jest is able to see when its interpreting your test cases.

## `/tests/App.test.jsx` summarized
- As this is a simple use case, there is only one test file `App.test.jsx`. 
- Ideally, you should have one test file per component with each test file having multiple tests cases for the component in question.
- Play around with the main app to understand what the expected outcome.
- Refer to in-line comments in `/tests/App.test.jsx`
- Also, you'd notice a `coverage` folder is created in the root of the project after the tests commands are run. Open `coverage/lcov-report/index.html` in a browser to see for information.
- Hopefully this should serve as some foundation for unit testing with jest.

## Helpful resources
- https://jestjs.io/docs/getting-started
- https://testing-library.com/docs/queries/about
- https://testing-library.com/docs/dom-testing-library/api-events
- https://www.jest-preview.com/docs/getting-started/usage/