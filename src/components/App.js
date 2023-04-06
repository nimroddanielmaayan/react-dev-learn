import classes from './App.module.css';
import { useState } from 'react';

import MyButton from './MyButton';
import AboutSection from './AboutSection';
import ProfileSection from './ProfileSection';
import ListSection from './ListSection';
import MyButtonV2 from './MyButtonV2';

function App() {
  // The counter state variable that is passed down, using props, to MyButtonV2 must be defined here, at the top of the App() component function (which is one level above MyButtonV2 on the component chain)
  // Likewise, the handleClickV2() function must be defined here and then passed down using props

  const [countV2, setCountV2] = useState(0);

  function handleClickV2() {
    setCountV2(countV2 + 1);
  }

  return (
    <div className={classes.appMainDiv}>
      <h1>Welcome to my app</h1>
      <MyButton />
      <MyButton />

      <hr className={classes.hrSolid} />

      <h1>We're counters that update together</h1>
      <MyButtonV2 countV2={countV2} onClick={handleClickV2} />
      <br />
      <MyButtonV2 countV2={countV2} onClick={handleClickV2} />

      <hr className={classes.hrSolid} />

      <AboutSection />

      <hr className={classes.hrSolid} />

      <ProfileSection />

      <hr className={classes.hrSolid} />

      <h1>A list with conditional formatting</h1>
      <ListSection />
    </div>
  );
}

export default App;
