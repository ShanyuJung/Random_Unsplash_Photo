import { useState, useEffect } from "react";
import classes from "./App.module.css";
import Footer from "./components/Footer";
import Landing from "./components/Landing";
import UnsplashImage from "./components/UnsplashImage";

const App = () => {
  const ACCESS_KEY = "w2ZnMRGaVZDTRs6vYk7hWiMQV2UOtgTd59ZLWS9EM0c";

  const [pics, setPics] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.unsplash.com/photos/random/?client_id=${ACCESS_KEY}&count=2&orientation=landscape&query=`
    )
      .then((res) => res.json())
      .then((data) => {
        setPics(data);
      });
  }, []);

  const reloadPhotoHandler = () => {
    fetch(
      `https://api.unsplash.com/photos/random/?client_id=${ACCESS_KEY}&count=2&orientation=landscape&query=`
    )
      .then((res) => res.json())
      .then((data) => {
        setPics(data);
      });
  };

  return (
    <div className={classes.wrapper}>
      <Landing />
      <div className={classes.header} id="images">
        <h2>Photos</h2>
      </div>
      <UnsplashImage pics={pics} />
      <Footer onClick={reloadPhotoHandler} />
    </div>
  );
};

export default App;
