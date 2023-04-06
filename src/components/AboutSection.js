import classes from './AboutSection.module.css';

function AboutSection() {
  return (
    <div className={classes.aboutDiv}>
      <h1>About</h1>
      <p>
        Hello there.
        <br />
        How do you do?
      </p>
    </div>
  );
}

export default AboutSection;
