import classes from "./UnsplashImage.module.css";

const UnsplashImage = (props) => {
  return (
    <>
      {props.pics.map((pic) => {
        return (
          <div key={`div${pic.id}`}>
            <img
              src={pic.urls.regular}
              key={pic.id}
              alt=""
              onClick={props.onClick}
            />
            <div className={classes.caption} key={`caption${pic.id}`}>
              {`Photo by ${pic.user.name}`}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default UnsplashImage;
