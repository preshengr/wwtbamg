import "./app.css";
import { useEffect, useMemo, useState } from "react";
import Start from "./components/Start";
import Timer from "./components/Timer";
import Trivia from "./components/Trivia";

function App() {
  const [username, setUsername] = useState(null);
  const [timeOut, setTimeOut] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [earned, setEarned] = useState("$ 0");

  const data = [
    {
      id: 1,
      question: "What is the capital city of France?",
      answers: [
        {
          text: "Rome",
          correct: false,
        },
        {
          text: "Paris",
          correct: true,
        },
        {
          text: " London",
          correct: false,
        },
        {
          text: "Berlin",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "When was the website `Facebook` launch?",
      answers: [
        {
          text: "2004",
          correct: true,
        },
        {
          text: "2005",
          correct: false,
        },
        {
          text: "2006",
          correct: false,
        },
        {
          text: "2007",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "Which planet is known as the Red Planet?",
      answers: [
        {
          text: "Venus",
          correct: false,
        },
        {
          text: "Jupiter",
          correct: false,
        },
        {
          text: "Mercury",
          correct: false,
        },
        {
          text: "Mars",
          correct: true,
        },
      ],
    },
    {
      id: 4,
      question: "Who painted the Mona Lisa?",
      answers: [
        {
          text: " Leonardo da Vinci",
          correct: true,
        },
        {
          text: "Michelangelo",
          correct: false,
        },
        {
          text: "Pablo Picasso",
          correct: false,
        },
        {
          text: "Vincent van Gogh",
          correct: false,
        },
      ],
    },

    {
      id: 5,
      question: "What is the chemical symbol for water?",
      answers: [
        {
          text: "CO2",
          correct: false,
        },
        {
          text: "NaCl",
          correct: false,
        },
        {
          text: "O2",
          correct: false,
        },
        {
          text: "H2O",
          correct: true,
        },
      ],
    },

    {
      id: 6,
      question: 'The first male African-American tennis player to win the U.S Open and the Wimbledon tournaments was?',
      answers: [
        {
          text: "Charles Dickens",
          correct: false,
        },
        {
          text: "William Shakespeare",
          correct: false,
        },
        {
          text: "Arthur Ashe",
          correct: true,
        },
        {
          text: " Emily Brontë",
          correct: false,
        },
      ],
    },

    {
      id: 7,
      question: '"The Three Bs" (Bach, Beethoven and Brahms) are iconic classical musicians who all hail from the same country. Which country is that?',
      answers: [
        {
          text: "China",
          correct: false,
        },
        {
          text: "Germany",
          correct: true,
        },
        {
          text: "United Kingdom",
          correct: false,
        },
        {
          text: "Mount Fuji",
          correct: false,
        },
      ],
    },

    {
      id: 8,
      question: "Who was the first person to step on the moon?",
      answers: [
        {
          text: "Buzz Aldrin",
          correct: false,
        },
        {
          text: "Neil Armstrong",
          correct: true,
        },
        {
          text: "Yuri Gagarin",
          correct: false,
        },
        {
          text: "John Glenn",
          correct: false,
        },
      ],
    },
    {
      id: 9,
      question: "What is the largest mammal in the world?",
      answers: [
        {
          text: "Blue whale",
          correct: true,
        },
        {
          text: "African elephant ",
          correct: false,
        },
        {
          text: "Giraffe",
          correct: false,
        },
        {
          text: "Hippopotamus",
          correct: false,
        },
      ],
    },

    {
      id: 10,
      question: "Which country is famous for its pyramids?",
      answers: [
        {
          text: "China",
          correct: false,
        },
        {
          text: "Mexico ",
          correct: false,
        },
        {
          text: "Greece",
          correct: false,
        },
        {
          text: "Egypt",
          correct: true,
        },
      ],
    },

    {
      id: 11,
      question: 'Who is the author of "Harry Potter" series?',
      answers: [
        {
          text: "Stephen King",
          correct: false,
        },
        {
          text: "J.K. Rowling ",
          correct: true,
        },
        {
          text: "Suzanne Collins",
          correct: false,
        },
        {
          text: "George R.R. Martin",
          correct: false,
        },
      ],
    },

    {
      id: 12,
      question: "What is the chemical symbol for gold?",
      answers: [
        {
          text: "Ag",
          correct: false,
        },
        {
          text: "Au ",
          correct: true,
        },
        {
          text: "Fe",
          correct: false,
        },
        {
          text: "Pt",
          correct: false,
        },
      ],
    },
    {
      id: 13,
      question: "Which continent is the least populated?",
      answers: [
        {
          text: "Europe",
          correct: false,
        },
        {
          text: "Africa ",
          correct: false,
        },
        {
          text: "Asia",
          correct: false,
        },
        {
          text: "Antarctica",
          correct: true,
        },
      ],
    },

    {
      id: 14,
      question: 'Who painted the famous artwork "The Starry Night"?',
      answers: [
        {
          text: "Claude Monet",
          correct: false,
        },
        {
          text: "Vincent van Gogh ",
          correct: true,
        },
        {
          text: " Leonardo da Vinci",
          correct: false,
        },
        {
          text: "Pablo Picasso",
          correct: false,
        },
      ],
    },
    {
      id: 15,
      question: "Who is the shortest player in the first 70 years of NBA history to win the Slam Dunk Contest?",
      answers: [
        {
          text: "Tokyo",
          correct: false,
        },
        {
          text: "Spud Webb ",
          correct: true,
        },
        {
          text: " Armstrong",
          correct: false,
        },
        {
          text: "Nike",
          correct: false,
        },
      ],
    },
  ];

  const moneyPyramid = useMemo(
    () =>
      [
        { id: 1, amount: "N 10.000" },
        { id: 2, amount: "N 20.000" },
        { id: 3, amount: "N 30.000" },
        { id: 4, amount: "N 40.000" },
        { id: 5, amount: "N 50.000" },
        { id: 6, amount: "N 100.000" },
        { id: 7, amount: "N 200.000" },
        { id: 8, amount: "N 300.000" },
        { id: 9, amount: "N 400.000" },
        { id: 10, amount: "N 500.000" },
        { id: 11, amount: "N 600.000" },
        { id: 12, amount: "N 700.000" },
        { id: 13, amount: "N 800.000" },
        { id: 14, amount: "N 900.000" },
        { id: 15, amount: "N 1.000.000" },
      ].reverse(),
    []
  );

  useEffect(() => {
    questionNumber > 1 &&
      setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
  }, [questionNumber, moneyPyramid]);

  return (
    <div className='app'>
      {!username ? (
        <Start setUsername={setUsername} />
      ) : (
        <>
          <div className='main'>
            {timeOut ? (
              <h1 className='endText'>You earned: {earned}</h1>
            ) : (
              <>
                <div className='top'>
                  <div className='timer'>
                    <Timer
                      setTimeOut={setTimeOut}
                      questionNumber={questionNumber}
                    />
                  </div>
                </div>
                <div className='bottom'>
                  <Trivia
                    data={data}
                    questionNumber={questionNumber}
                    setQuestionNumber={setQuestionNumber}
                    setTimeOut={setTimeOut}
                  />
                </div>
              </>
            )}
          </div>
          <div className='pyramid'>
            <ul className='moneyList'>
              {moneyPyramid.map((m) => (
                <li
                  className={
                    questionNumber === m.id
                      ? "moneyListItem active"
                      : "moneyListItem"
                  }
                >
                  <span className='moneyListItemNumber'>{m.id}</span>
                  <span className='moneyListItemAmount'>{m.amount}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
