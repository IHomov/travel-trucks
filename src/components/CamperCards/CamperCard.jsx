import { useState } from "react";
import clsx from "clsx";
import s from "./CamperCard.module.css";
import { Link } from "react-router-dom";
import { formatPrice } from "../../utils/formatPrice";

const CamperCard = ({ camper }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const features = [
    {
      id: "transmission",
      label: camper.transmission,
      icon: "icon-automatic",
      value: true,
    },
    { id: "engine", label: camper.engine, icon: "icon-petrol", value: true },
    { id: "AC", label: "AC", value: camper.AC, icon: "icon-ac" },
    {
      id: "kitchen",
      label: "Kitchen",
      value: camper.kitchen,
      icon: "icon-cup",
    },
    { id: "TV", label: "TV", value: camper.TV, icon: "icon-tv" },
    {
      id: "fridge",
      label: "Fridge",
      value: camper.refrigerator,
      icon: "icon-fridge",
    },
    {
      id: "microwave",
      label: "Microwave",
      value: camper.microwave,
      icon: "icon-microwave",
    },
    {
      id: "bathroom",
      label: "Bathroom",
      value: camper.bathroom,
      icon: "icon-bathroom",
    },
    { id: "water", label: "Water", value: camper.water, icon: "icon-water" },
    { id: "radio", label: "Radio", value: camper.radio, icon: "icon-radio" },
    { id: "gas", label: "Gas", value: camper.gas, icon: "icon-gas" },
  ].filter((feature) => feature.value !== false);

 
  <p className={s.price}>{formatPrice(camper.price)}</p>

  return (
    <div className={s.card}>
      <img
        src={camper?.gallery[0]?.original}
        alt={camper?.name}
        className={s.image}
      />

      <div className={s.content}>
        <div className={s.header}>
          <h2 className={s.name}>{camper?.name}</h2>
          <div className={s.priceBox}>
            <p className={s.price}>{formatPrice(camper?.price)}</p>
            <button
              type="button"
              className={s.heartBtn}
              onClick={() => setIsFavorite(!isFavorite)}
            >
              <svg
                className={clsx(s.heartIcon, isFavorite && s.active)}
                width="26"
                height="24"
              >
                <use href="/sprite.svg#icon-heart"></use>
              </svg>
            </button>
          </div>
        </div>

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

        <p className={s.description}>{camper?.description}</p>

        <div className={s.categories}>
          {features.map((feature) => (
            <span key={feature.id} className={s.tag}>
              <svg className={s.featureIcon}>
                <use href={`/sprite.svg#${feature.icon}`}></use>
              </svg>
              {feature.label}
            </span>
          ))}
        </div>

        <Link to={`/catalog/${camper.id}`} className={s.btnMain}>
          Show more
        </Link>
      </div>
    </div>
  );
};

export default CamperCard;
