import classes from "./Footer.module.css";

const Footer = (props) => {
  return (
    <footer className={classes.footer}>
      <a href="#images" className={classes.landingBtn} onClick={props.onClick}>
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
