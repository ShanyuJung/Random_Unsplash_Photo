import classes from "./Landing.module.css";

const Landing = () => {
  return (
    <>
      <div className={classes.landing}>
        <div className={classes.landingText}>
          <div>
            <h1>Unsplash</h1>
          </div>
          <h2>Random Search Photography</h2>
          <a href="#images" className={classes.landingBtn}>
            View Photos
          </a>
        </div>
        <div className={classes.landingImage}></div>
      </div>
    </>
  );
};

export default Landing;
