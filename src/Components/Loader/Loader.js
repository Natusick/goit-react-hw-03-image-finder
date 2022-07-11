import { SpinnerDotted } from 'spinners-react';
import s from './Loader.module.css';

const Loader = () => {
  return (
    <div className={s.loader}>
      <SpinnerDotted size={100} color="blue" />
    </div>
  );
};

export default Loader;