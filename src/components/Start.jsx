/*
 * Importing the useRef hook from React.
 * useRef is used to reference an element directly in the DOM without causing a re-render.
 */
import { useRef } from "react";

/*
 * The Start component receives the setUsername function as a prop.
 * This function will set the username based on the user's input.
 */
export default function Start({ setUsername }) {

  /*
   * Creating a reference to the input element using useRef.
   * This allows direct access to the input field in the DOM.
   */
  const inputRef = useRef();

  /*
   * Function to handle the click event of the Start button.
   * It checks if the input field has a value, and if so, it calls setUsername with the input value.
   */
  const handleClick = () => {
    inputRef.current.value && setUsername(inputRef.current.value);
  };

  /*
   * Returning the JSX for the component.
   * It includes an input field for entering the username and a button to trigger the handleClick function.
   */
  return (
    <div className='start'>
      <input
        className='startInput'
        placeholder='enter your name'
        ref={inputRef} // The input field is referenced here using the inputRef.
      />
      <button className='startButton' onClick={handleClick}>
        Start
      </button>
    </div>
  );
}
