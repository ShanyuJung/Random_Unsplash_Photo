import ReactDOM from "react-dom";
import classes from "./Modal.module.css";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose} />;
};

const ModalOverlay = (props) => {
  //   console.log(props.modalInfo.links.likes);
  const creatorInfo = props.modalInfo;
  const createDate = new Date(props.modalInfo.created_at);
  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <div className={classes.modal}>
      <img src={creatorInfo.urls.regular} alt="" loading="lazy" />
      <div className={classes.closeBtn} onClick={props.onClose}>
        <i className="fa fa-times-circle-o fa-3x" aria-hidden="true"></i>
      </div>
      <div className={classes.contentText}>
        {creatorInfo.description && (
          <>
            <h2>Description</h2>
            <h4>{creatorInfo.description}</h4>
          </>
        )}
        <h3>{`Create by ${creatorInfo.user.name}`}</h3>
        <h3>{`Published at ${
          month[createDate.getMonth()]
        }-${createDate.getDate()}-${createDate.getFullYear()}`}</h3>
        <div className={classes.icons}>
          <a href={creatorInfo.user.links.html} target="_blank">
            <i className="fa fa-user-circle fa-2x" aria-hidden="true"></i>
          </a>
          <a href={creatorInfo.links.html} target="_blank">
            <i className="fa fa-camera fa-2x" aria-hidden="true"></i>
          </a>
          {creatorInfo.user.instagram_username && (
            <a
              href={`https://www.instagram.com/${creatorInfo.user.instagram_username}/`}
              target="_blank"
            >
              <i className="fa fa-instagram fa-2x" aria-hidden="true"></i>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay onClose={props.onClose} modalInfo={props.modalInfo} />,
        portalElement
      )}
    </>
  );
};

export default Modal;
