import { Link } from "react-router-dom";
import s from "./HomePage.module.css";

const HomePage = () => {
  return (
    <section className={s.hero}>
      <div className={s.container}>
        <h1 className={s.title}>Campers of your dreams</h1>
        <p className={s.subtitle}>
          You can find everything you need for your perfect adventure in our catalog
        </p>
        <Link to="/catalog" className={s.button}>
          View Now
        </Link>
      </div>
    </section>
  );
};

export default HomePage;