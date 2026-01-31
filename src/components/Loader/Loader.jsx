import s from './Loader.module.css';

const Loader = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.spinner}></div>
      <p>Loading camper details...</p>
    </div>
  );
};

export default Loader;