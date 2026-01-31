import { useState } from "react";
import clsx from "clsx";
import s from "./CamperCard.module.css";

const CamperCard = ({ camper }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const features = [
    {
      id: "transmission",
      label: camper.transmission,
      icon: "icon-Automatic",
      value: true,
    },
    { id: "engine", label: camper.engine, icon: "icon-Petrol", value: true },
    { id: "AC", label: "AC", value: camper.AC, icon: "icon-AC" },
    {
      id: "kitchen",
      label: "Kitchen",
      value: camper.kitchen,
      icon: "icon-Cup",
    },
    { id: "TV", label: "TV", value: camper.TV, icon: "icon-TV" },
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
      icon: "icon-Microwave",
    },
    {
      id: "bathroom",
      label: "Bathroom",
      value: camper.bathroom,
      icon: "icon-Bathroom",
    },
    { id: "water", label: "Water", value: camper.water, icon: "icon-water" },
  ].filter((feature) => feature.value !== false);

  const formatPrice = (price) => `€${price?.toFixed(2)}`;

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
                <use href="/sprite.svg#icon-Heart"></use>
              </svg>
            </button>
          </div>
        </div>

        <div className={s.stats}>
          <div className={s.ratingBox}>
            <svg width="16" height="16" className={s.iconStar}>
              <use href="/sprite.svg#icon-Rating"></use>
            </svg>
            <span className={s.ratingText}>
              {camper?.rating} ({camper?.reviews?.length} Reviews)
            </span>
          </div>

          <div className={s.locationBox}>
            <svg width="16" height="16" className={s.iconMap}>
              <use href="/sprite.svg#icon-Map"></use>
            </svg>
            <span className={s.locationText}>{camper?.location}</span>
          </div>
        </div>

        <p className={s.description}>{camper?.description}</p>

        <div className={s.categories}>
          {features.map((feature) => (
            <span key={feature.id} className={s.tag}>
              <svg className={s.featureIcon} width="20" height="20">
                <use href={`/sprite.svg#${feature.icon}`}></use>
              </svg>
              {feature.label}
            </span>
          ))}
        </div>

        <button className={s.btnMain}>Show more</button>
      </div>
    </div>
  );
};

export default CamperCard;
