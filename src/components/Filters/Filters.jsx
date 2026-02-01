import { useDispatch, useSelector } from "react-redux";
import s from "./Filters.module.css";
import { fetchCampers } from "../../redux/campersOps";
import { setForm, setLocation, toggleFeature } from "../../redux/filtersSlice";
import { resetPage } from "../../redux/campersSlice";

const Filters = () => {
  const dispatch = useDispatch();

 // Filters.jsx
const { location, form, features = [] } = useSelector((state) => state.filters || {});

  const handleSearch = () => {
    dispatch(resetPage());
    dispatch(fetchCampers({page: 1}));
  };
  return (
    <aside className={s.sidebar}>
      {/* Блок локації */}
      <div className={s.locationSection}>
        <label className={s.label}>Location</label>
        <div className={s.inputWrapper}>
          <svg className={s.iconMap} width="20" height="20">
            <use href="/sprite.svg#icon-Map"></use>
          </svg>
          <input type="text" placeholder="City, Country" className={s.input} value={location} 
          onChange={(e) => dispatch(setLocation(e.target.value))}/>
        </div>
      </div>

      <p className={s.filtersText}>Filters</p>

      {/* Обладнання */}
      <div className={s.filterGroup}>
        <h3 className={s.groupTitle}>Vehicle equipment</h3>
        <div className={s.divider}></div>
        <div className={s.grid}>
          {[
            { id: "AC", label: "AC" },
            { id: "automatic", label: "Automatic" },
            { id: "kitchen", label: "Kitchen", icon: "Cup" }, // Мапимо "Cup" на "kitchen" для API
            { id: "TV", label: "TV" },
            { id: "bathroom", label: "Bathroom" },
          ].map((item) => (
            <button
              key={item.id}
              type="button"
              // Додаємо клас active, якщо фіча обрана
              className={`${s.filterItem} ${features.includes(item.id) ? s.selected : ""}`}
              onClick={() => dispatch(toggleFeature(item.id))}
            >
              <svg width="32" height="32">
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
            { id: "panelTruck", label: "Van", icon: "Van" },
            { id: "fullyIntegrated", label: "Fully-Integrated", icon: "Fully-Integrated" },
            { id: "alcove", label: "Alcove", icon: "Alcove" },
          ].map((item) => (
            <button
              key={item.id}
              type="button"
              // Додаємо клас active, якщо цей тип кузова обраний
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
