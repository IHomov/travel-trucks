import s from "./Features.module.css";

const Features = ({ camper }) => {
  const badges = [
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
  ];

  return (
    <div className={s.container}>
      <ul className={s.badgeList}>
        {badges.map((item) =>
          item.value ? (
            <li key={item.id} className={s.badgeItem}>
              <svg className={s.icon} width="20" height="20">
                <use href={`/sprite.svg#${item.icon}`}></use>
              </svg>
              <span>{item.label}</span>
            </li>
          ) : null,
        )}
      </ul>

      <h3 className={s.title}>Vehicle details</h3>
      <ul className={s.detailsList}>
        <li className={s.detailsItem}>
          <span>Form</span> <span>{camper.form}</span>
        </li>
        <li className={s.detailsItem}>
          <span>Length</span> <span>{camper.length}</span>
        </li>
        <li className={s.detailsItem}>
          <span>Width</span> <span>{camper.width}</span>
        </li>
        <li className={s.detailsItem}>
          <span>Height</span> <span>{camper.height}</span>
        </li>
        <li className={s.detailsItem}>
          <span>Tank</span> <span>{camper.tank}</span>
        </li>
        <li className={s.detailsItem}>
          <span>Consumption</span> <span>{camper.consumption}</span>
        </li>
      </ul>
    </div>
  );
};

export default Features;
