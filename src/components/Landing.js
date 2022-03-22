import classes from "./Landing.module.css";

const Landing = (props) => {
  // const toImageFunc = () => {
  //   window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
  // };

  return (
    <>
      <div className={classes.landing}>
        <div className={classes.landingText}>
          <div>
            <h1>Unsplash</h1>
          </div>
          <h2>Random Search Photography</h2>
          <a className={classes.landingBtn} onClick={props.onScroll}>
            View Photos
          </a>
        </div>
        <div className={classes.landingImage}></div>
      </div>
    </>
  );
};

export default Landing;
