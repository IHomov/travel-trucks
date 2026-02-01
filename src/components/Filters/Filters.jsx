import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import s from "./Filters.module.css";
import { setForm, setLocation, toggleFeature } from "../../redux/filtersSlice";
import { resetPage } from "../../redux/campersSlice";

const Filters = () => {
  const dispatch = useDispatch();
  const [, setSerchParams] = useSearchParams();
  
  const {
    location,
    form,
    features = [],
  } = useSelector((state) => state.filters || {});

  const handleSearch = () => {
    const params = {};
    if (location) params.location = location;
    if (form) params.form = form;
    if (features.length > 0) params.features = features.join(",");
    setSerchParams(params);

    dispatch(resetPage());
    
  };
  return (
    <aside className={s.sidebar}>
        <div className={s.locationSection}>
        <label className={s.label}>Location</label>
        <div className={s.inputWrapper}>
          <svg className={s.iconMap} width="20" height="20">
            <use href="/sprite.svg#icon-map"></use>
          </svg>
          <input
            type="text"
            placeholder="City, Country"
            className={s.input}
            value={location}
            onChange={(e) => dispatch(setLocation(e.target.value))}
          />
        </div>
      </div>

      <p className={s.filtersText}>Filters</p>

      {/* Обладнання */}
      <div className={s.filterGroup}>
        <h3 className={s.groupTitle}>Vehicle equipment</h3>
        <div className={s.divider}></div>
        <div className={s.grid}>
          {[
            { id: "ac", label: "AC", icon: "ac" }, 
            { id: "automatic", label: "Automatic", icon: "automatic" },
            { id: "kitchen", label: "Kitchen", icon: "cup" },
            { id: "tv", label: "TV", icon: "tv" },
            { id: "bathroom", label: "Bathroom", icon: "bathroom" },
            { id: "petrol", label: "Petrol", icon: "petrol" },
            { id: "water", label: "Water", icon: "water" },
            { id: "gas", label: "Gas", icon: "gas" },
            { id: "radio", label: "Radio", icon: "radio" },
            { id: "refrigerator", label: "Fridge", icon: "fridge" },
          ].map((item) => (
            <button
              key={item.id}
              type="button"
              className={`${s.filterItem} ${features.includes(item.id) ? s.selected : ""}`}
              onClick={() => dispatch(toggleFeature(item.id))}
            >
              <svg width="32" height="32" className={s.filterIcon}>
                <use href={`/sprite.svg#icon-${item.icon || item.label}`}></use>
              </svg>
              <span>{item.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Тип кузова */}
      <div className={s.filterGroup}>
        <h3 className={s.groupTitle}>Vehicle type</h3>
        <div className={s.divider}></div>
        <div className={s.grid}>
          {[
            { id: "panelTruck", label: "Van", icon: "van" },
            {
              id: "fullyIntegrated",
              label: "Fully-Integrated",
              icon: "fully-integrated",
            },
            { id: "alcove", label: "Alcove", icon: "alcove" },
          ].map((item) => (
            <button
              key={item.id}
              type="button"
             
              className={`${s.filterItem} ${form === item.id ? s.selected : ""}`}
              onClick={() => dispatch(setForm(item.id))}
            >
              <svg width="32" height="32" className={s.filterIcon}>
                <use href={`/sprite.svg#icon-${item.icon}`}></use>
              </svg>
              <span>{item.label}</span>
            </button>
          ))}
        </div>
      </div>

      <button className={s.btnSearch} type="button" onClick={handleSearch}>
        Search
      </button>
    </aside>
  );
};

export default Filters;
