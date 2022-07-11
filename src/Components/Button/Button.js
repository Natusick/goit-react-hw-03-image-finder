import PropTypes from 'prop-types';
import s from './Button.module.css';

const Button = ({ onLoadMore, isLoading }) => {
  return (
    <div className={s.wrapper}>
      {!isLoading && (
        <button type="button" className={s.button} onClick={onLoadMore}>
          Load more
        </button>
      )}
    </div>
  );
};

Button.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  onLoadMore: PropTypes.func.isRequired,
};

export default Button;