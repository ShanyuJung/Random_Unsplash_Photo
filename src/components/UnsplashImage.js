import classes from "./UnsplashImage.module.css";
import { useState } from "react";
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
      {showModal && (
        <Modal modalInfo={modalInfo} onClose={onClose}>
          {modalInfo.id}
        </Modal>
      )}
      {props.pics.map((pic) => {
        return (
          <div key={`div${pic.id}`}>
            <img
              src={pic.urls.regular}
              key={pic.id}
              alt=""
              onClick={() => showModalHandler(pic)}
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
