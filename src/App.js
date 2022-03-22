import { useState, useEffect } from "react";
import classes from "./App.module.css";
import Footer from "./components/Footer";
import Landing from "./components/Landing";
import UnsplashImage from "./components/UnsplashImage";

const App = () => {
  const ACCESS_KEY = "w2ZnMRGaVZDTRs6vYk7hWiMQV2UOtgTd59ZLWS9EM0c";
  const picsNumber = "2";

  const [pics, setPics] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.unsplash.com/photos/random/?client_id=${ACCESS_KEY}&count=${picsNumber}&orientation=landscape&query=`
    )
      .then((res) => res.json())
      .then((data) => {
        setPics(data);
      });
  }, []);

  const reloadPhotoHandler = () => {
    fetch(
      `https://api.unsplash.com/photos/random/?client_id=${ACCESS_KEY}&count=${picsNumber}&orientation=landscape&query=`
    )
      .then((res) => res.json())
      .then((data) => {
        setPics(data);
      });
  };

  // console.log(pics);

  return (
    <div className={classes.wrapper}>
      <Landing />
      <div className={classes.header} id="images">
        <div className={classes.headerText}>
          <h2>Photos</h2>
          <p>Click Photos to Get More Information</p>
        </div>
      </div>
      <UnsplashImage pics={pics} />
      <Footer onClick={reloadPhotoHandler} />
    </div>
  );
};

export default App;
