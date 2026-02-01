import s from "./Features.module.css";

const Features = ({ camper }) => {
  const badges = [
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
      icon: "icon-Cup",
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
  ];

  return (
    <div className={s.container}>
      <ul className={s.badgeList}>
        {badges.map((item) =>
          item.value ? (
            <li key={item.id} className={s.badgeItem}>
              <div className={s.badgeIcon}>
              <svg className={s.icon} width="20" height="20">
                <use href={`/sprite.svg#${item.icon}`}></use>
              </svg>
              </div>
              <span>{item.label}</span>
            </li>
          ) : null,
        )}
      </ul>

      <h3 className={s.title}>Vehicle details</h3>
      <ul className={s.detailsList}>
        <li className={s.detailsItem}>
          <span className={s.detailName}>Form</span>
          <span className={s.detailValue}>{camper.form}</span>
        </li>
        <li className={s.detailsItem}>
          <span className={s.detailName}>Length</span>
          <span className={s.detailValue}>{camper.length}</span>
        </li>
        <li className={s.detailsItem}>
          <span className={s.detailName}>Width</span>
          <span className={s.detailValue}>{camper.width}</span>
        </li>
        <li className={s.detailsItem}>
          <span className={s.detailName}>Height</span>
          <span className={s.detailValue}>{camper.height}</span>
        </li>
        <li className={s.detailsItem}>
          <span className={s.detailName}>Tank</span>
          <span className={s.detailValue}>{camper.tank}</span>
        </li>
        <li className={s.detailsItem}>
          <span className={s.detailName}>Consumption</span>
          <span className={s.detailValue}>{camper.consumption}</span>
        </li>
      </ul>
    </div>
  );
};

export default Features;
