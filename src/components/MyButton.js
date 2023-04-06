// import classes from './MyButton.module.css';

import { useState } from 'react';

function MyButton() {
  // hooks can only be set at the top of the component
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
    alert('You clicked me! How dare you?!');
  }

  return (
    <>
      <button onClick={handleClick}>I'm a button. Click if you dare!</button>
      <p>Clicked {count} times</p>
    </>
  );
}

export default MyButton;
