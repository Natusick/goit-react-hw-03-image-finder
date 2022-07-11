import PropTypes from "prop-types";
import s from "./ImageGalleryItem.module.css";

const ImageGalleryItem = ({ url, onToggleModal, onOpenModal }) => (
  <li  className={s.item} onClick={onToggleModal}>
    <img src={url} alt="" className={s.image} onClick={onOpenModal} />
  </li>
);


ImageGalleryItem.propTypes = {
  url: PropTypes.string.isRequired,
  onOpenModal: PropTypes.func.isRequired,
  onToggleModal: PropTypes.func.isRequired,
};

export default ImageGalleryItem;

