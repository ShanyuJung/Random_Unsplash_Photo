import classes from "./Footer.module.css";

const Footer = (props) => {
  return (
    <footer className={classes.footer}>
      <a
        className={classes.landingBtn}
        onClick={props.onReload}
        // onClick={props.toScroll}
      >
        Load New Random Photos
      </a>
      <h3>Learn More</h3>
      <a href="https://unsplash.com/developers">
        https://unsplash.com/developers
      </a>
    </footer>
  );
};

export default Footer;
