### Project Name: Millionaire Quiz App

---

#### Description:
This project is a trivia quiz application built using React. It presents users with a series of multiple-choice questions and tracks their progress as they answer questions correctly. The user interface includes a timer, a question panel, and a money pyramid representing potential earnings.

---

#### Installation:
To run this project locally, follow these steps:

1. Clone the repository: `git clone <repository-url>`
2. Navigate to the project directory: `cd who-wants-to-be-a-millionaire `
3. Install dependencies: `npm install`
4. Start the development server: `npm start`

---

#### Usage:
1. Upon loading the application, users are prompted to enter their name.
2. Once a name is entered and the "Start" button is clicked, the quiz begins.
3. Users have a limited time to answer each question.
4. After selecting an answer, the application displays whether the answer was correct or incorrect.
5. The user progresses through a series of questions, with the potential to earn increasing amounts of money.
6. If the user answers all questions correctly or the timer runs out, the quiz ends, and the total earnings are displayed.

---

#### Technologies Used:
- React: A JavaScript library for building user interfaces
- CSS: Styling language used for designing the user interface
- JavaScript: Programming language used for application logic
- use-sound: React hook for playing sound effects

---

#### Components:

1. **App Component**:
   - Manages the main application logic and state.
   - Renders the start screen or the trivia quiz based on user interaction.
   - Displays the timer and the trivia questions.
   - Tracks the user's progress and earnings.

2. **Start Component**:
   - Renders the initial screen where users can enter their name to start the quiz.
   - Accepts user input for the username.

3. **Timer Component**:
   - Displays a countdown timer for each question.
   - Signals when time runs out.
   - Resets the timer when a new question is displayed.

4. **Trivia Component**:
   - Presents trivia questions and answer options to the user.
   - Handles user input for selecting answers and progresses to the next question.
   - Plays sound effects for correct and incorrect answers.
   - Updates the question and answer display based on user interaction.

---

#### Deployment:
The live version of this project can be accessed [here](https://millonaires-game.netlify.app/.)

---

#### Data:
The quiz questions and answer options are stored as an array of objects within the `data` variable in the `App` component.

---

#### Credits:
This project was created by Precious Amaechi, inspired by Alx Africa

---

#### License:
This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).

---

#### Contact:
For inquiries or support, please [Email Here](preshengr@gmail.com.)

---
