import { useEffect, useState } from "react"; // Importing the useEffect and useState hooks from React

export default function Timer({ setTimeOut, questionNumber }) {
  const [timer, setTimer] = useState(30); // Initializing a state variable 'timer' with a default value of 30

  useEffect(() => {
    if (timer === 0) return setTimeOut(true); // If the timer reaches 0, call setTimeOut to indicate time's up
    const interval = setInterval(() => {
      setTimer((prev) => prev - 1); // Decrease the timer value by 1 every second
    }, 1000);
    return () => clearInterval(interval); // Cleanup the interval when the component unmounts or the timer updates
  }, [timer, setTimeOut]); // Dependency array ensures this effect runs when 'timer' or 'setTimeOut' changes

  useEffect(() => {
    setTimer(30); // Reset the timer to 30 seconds whenever the question number changes
  }, [questionNumber]); // This effect depends on the questionNumber and runs every time it changes

  return timer; // Return the current timer value for display or usage
}
