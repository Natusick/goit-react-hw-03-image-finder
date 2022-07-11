import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import s from './ImageGallery.module.css';

const ImageGallery = ({ images, onToggleModal, onOpenModal }) => {
  return (
    <ul className={s.list}>
      {images.map(({ id, webformatURL }) => (
        <ImageGalleryItem
          key={id}
          url={webformatURL}
          onOpenModal={onOpenModal}
          onToggleModal={onToggleModal}
        />
      ))}
    </ul>
  );
};

ImageGallery.propTypes = {
  onToggleModal: PropTypes.func.isRequired,
  onOpenModal: PropTypes.func.isRequired,
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ImageGallery;