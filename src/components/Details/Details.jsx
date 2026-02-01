import { useParams } from "react-router-dom";
import Features from "../Features/Features";
import Reviews from "../Reviews/Reviews";
import BookingForm from "../BookingForm/BookingForm";
import s from "./Details.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchCamperById } from "../../redux/campersOps";
import Loader from "../Loader/Loader";
import { formatPrice } from "../../utils/formatPrice";

const DetailsPage = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState("features");
  const dispatch = useDispatch();
  const camper = useSelector((state) => state.campers.currentCamper);
  const isLoading = useSelector((state) => state.campers.isLoading);

  useEffect(() => {
    dispatch(fetchCamperById(id));
  }, [dispatch, id]);

  if (isLoading) return <Loader />;
  if (!camper) return null;

  return (
    <section className={s.section}>
      <div className={s.header}>
        <h2 className={s.name}>{camper.name}</h2>
        <div className={s.meta}>
          <div className={s.stats}>
            <div className={s.ratingBox}>
              <svg width="16" height="16" className={s.iconStar}>
                <use href="/sprite.svg#icon-rating"></use>
              </svg>
              <span className={s.ratingText}>
                {camper?.rating} ({camper?.reviews?.length} Reviews)
              </span>
            </div>
            <div className={s.locationBox}>
              <svg width="16" height="16" className={s.iconMap}>
                <use href="/sprite.svg#icon-map"></use>
              </svg>
              <span className={s.locationText}>{camper?.location}</span>
            </div>
          </div>
        </div>
        
        <p className={s.price}>{formatPrice(camper.price)}</p>
      </div>

      <div className={s.gallery}>
        {camper.gallery.map((img, index) => (
          <img
            key={index}
            src={img.original}
            alt="Camper"
            className={s.galleryImage}
          />
        ))}
      </div>

      <p className={s.description}>{camper.description}</p>

      <div className={s.tabsList}>
        <button
          className={`${s.tabBtn} ${activeTab === "features" ? s.active : ""}`}
          onClick={() => setActiveTab("features")}
        >
          Features
        </button>
        <button
          className={`${s.tabBtn} ${activeTab === "reviews" ? s.active : ""}`}
          onClick={() => setActiveTab("reviews")}
        >
          Reviews
        </button>
      </div>

      <div className={s.mainContent}>
        <div className={s.infoSide}>
          <div className={s.tabContent}>
            {activeTab === "features" && <Features camper={camper} />}
            {activeTab === "reviews" && <Reviews reviews={camper.reviews} />}
          </div>
        </div>

        <aside className={s.formSide}>
          <BookingForm />
        </aside>
      </div>
    </section>
  );
};

export default DetailsPage;
