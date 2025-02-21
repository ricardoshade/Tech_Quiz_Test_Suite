# Tech Quiz Test Suite

## Description

Tech Quiz Test Suite is a web application designed to help aspiring developers test their knowledge and improve their skills through a series of technical quiz questions. The application is built using the MERN stack (MongoDB, Express, React, Node.js) and includes comprehensive testing using Cypress for both component and end-to-end tests.

## User Story

```md
AS AN aspiring developer
I WANT to take a tech quiz
SO THAT I can test my knowledge and improve my skills
```

## Acceptance Criteria

```md
GIVEN I am taking a tech quiz
WHEN I click the start button
THEN the quiz starts and I am presented with a question
WHEN I answer a question
THEN I am presented with another question
WHEN all questions are answered
THEN the quiz is over
WHEN the quiz is over
THEN I can view my score
WHEN the quiz is over
THEN I can start a new quiz
```

## Features

- **Start Quiz**: Click the "Start" button to begin the quiz.
- **Question Navigation**: Answer each question to proceed to the next one.
- **Score Display**: View your score after completing the quiz.
- **Restart Quiz**: Option to start a new quiz after finishing the current one.

## Getting Started

### Prerequisites

- Node.js
- MongoDB

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ricardoshade/Tech_Quiz_Test_Suite.git
   cd Tech_Quiz_Test_Suite
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   - Create a `.env` file in the root directory with the following content:
     ```dotenv
     PORT=3000
     MONGODB_URI=mongodb://localhost:27017/techquiz
     ```

4. Start the application in development mode:
   ```bash
   npm run start:dev
   ```

### Running Tests

To run the Cypress tests, use the following commands:

- Open Cypress Test Runner:
  ```bash
  npm run cypress:open
  ```

- Run Cypress tests in headless mode:
  ```bash
  npm run cypress:run
  ```

## Directory Structure

```md
.
├── client/                // the client application
├── cypress/               // Folder for Cypress
│   ├── component/         // Folder for component tests
│   │   └── Quiz.cy.tsx    // Component tests for the Quiz component
│   ├── e2e/               // Folder for end-to-end tests
│   │   └── quiz.cy.ts     // End-to-end tests for the Tech Quiz
│   ├── fixtures/          // Folder for test fixtures
│   │   └── questions.json // Mock data for testing
│   ├── support/           // Folder for Cypress support files
│   │   └── e2e.ts         // Support file for end-to-end tests
│   ├── tsconfig.json      // TypeScript configuration for Cypress
├── server/                // the server application
├── .gitignore
├── cypress.config.ts      // Cypress configuration file
├── package.json
├── tsconfig.json
└── README.md              // App description, link to video, setup and usage instructions
```

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License.

---

© 2025 Ricardo Shade. All Rights Reserved.
