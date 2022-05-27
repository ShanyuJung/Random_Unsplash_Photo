import classes from "./UnsplashImage.module.css";
import { useState, useEffect } from "react";
import Modal from "./Modal";

const UnsplashImage = (props) => {
  const [modalInfo, setModalInfo] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [isLoad, setIsLoad] = useState(false);

  const showModalHandler = (pic) => {
    setModalInfo(pic);
    setShowModal(true);
    document.body.style.overflow = "hidden";
  };

  const onClose = () => {
    setModalInfo({});
    setShowModal(false);
    document.body.style.overflow = "scroll";
  };

  return (
    <>
      {showModal && <Modal modalInfo={modalInfo} onClose={onClose} />}
      {props.pics.map((pic) => {
        return (
          <div className={classes.container} key={`div${pic.id}`}>
            <div className={classes.imgContainer}>
              <img
                src={pic.urls.regular}
                key={pic.id}
                alt={`Photo create by ${pic.user.name}`}
                onClick={() => showModalHandler(pic)}
                loading="lazy"
                onLoad={() => {
                  setIsLoad(true);
                  // console.log("loaded");
                }}
                className={isLoad ? classes.loaded : classes.loading}
              />
            </div>

            <div className={classes.caption} key={`caption${pic.id}`}>
              {`Create by ${pic.user.name}`}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default UnsplashImage;
