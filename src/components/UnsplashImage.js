import classes from "./UnsplashImage.module.css";
import { useState, useEffect } from "react";
import Modal from "./Modal";

const UnsplashImage = (props) => {
  const [modalInfo, setModalInfo] = useState({});
  const [showModal, setShowModal] = useState(false);

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
          <div key={`div${pic.id}`}>
            <img
              src={pic.urls.regular}
              key={pic.id}
              alt=""
              onClick={() => showModalHandler(pic)}
              loading="lazy"
            />
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
