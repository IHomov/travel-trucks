import s from "./CamperCard.module.css";
// Тут ми пізніше додамо іконки

const CamperCard = ({ camper }) => {
  return (
    <div className={s.card}>
      {/* Ліва частина - Фото */}
      <img
        src={camper?.gallery[0]?.original}
        alt={camper?.name}
        className={s.image}
      />

      {/* Права частина - Інфо */}
      <div className={s.content}>
        <div className={s.header}>
          <h2 className={s.name}>{camper?.name}</h2>
          <div className={s.priceBox}>
            <p className={s.price}>
              €{camper?.price?.toFixed(2).replace(".", ",")}
            </p>
            {/* Тут буде іконка серця */}
          </div>
        </div>

        <div className={s.stats}>
          <span>
            ⭐ {camper?.rating}({camper?.reviews?.length} Reviews)
          </span>
          <span>📍 {camper?.location}</span>
        </div>

        <p className={s.description}>{camper?.description}</p>

        {/* Теги (характеристики) */}
        <div className={s.categories}>
          <span className={s.tag}>Automatic</span>
          <span className={s.tag}>AC</span>
          <span className={s.tag}>Petrol</span>
          <span className={s.tag}>Kitchen</span>
          <span className={s.tag}>Radio</span>
          <span className={s.tag}>Bathroom</span>
          <span className={s.tag}>Refrigerator</span>
          <span className={s.tag}>Microwave</span>
          <span className={s.tag}>Gas</span>
          <span className={s.tag}>Water</span>
          <span className={s.tag}>TV</span>
          <span className={s.tag}>Bathroom</span>
        </div>


        <button className={s.btn}>Show more</button>
      </div>
    </div>
  );
};

export default CamperCard;
