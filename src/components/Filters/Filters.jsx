import s from "./Filters.module.css";
const Filters = () => {
  return (
    <aside className={s.sidebar}>
      {/* Блок локації */}
      <div className={s.locationSection}>
        <label className={s.label}>Location</label>
        <div className={s.inputWrapper}>
          <svg className={s.iconMap} width="20" height="20">
            <use href="/sprite.svg#icon-Map"></use>
          </svg>
          <input type="text" placeholder="City, Country" className={s.input} />
        </div>
      </div>

      <p className={s.filtersText}>Filters</p>

      {/* Обладнання */}
      <div className={s.filterGroup}>
        <h3 className={s.groupTitle}>Vehicle equipment</h3>
        <div className={s.divider}></div>
        <div className={s.grid}>
          {["AC", "Automatic", "Cup", "TV", "Bathroom"].map((item) => (
            <button key={item} className={s.filterItem}>
              <svg width="32" height="32">
                <use href={`/sprite.svg#icon-${item}`}></use>
              </svg>
              <span>{item}</span>
            </button>
          ))}
        </div>
      </div>

      <div className={s.filterGroup}>
        <h3 className={s.groupTitle}>Vehicle type</h3>
        <div className={s.divider}></div>
        <div className={s.grid}>
          {[
            { id: "Van", label: "Van" },
            { id: "Fully-Integrated", label: "Fully-Integrated" },
            { id: "Alcove", label: "Alcove" },
          ].map((item) => (
            <button key={item.id} className={s.filterItem} type="button">
              <svg width="32" height="32" className={s.filterIcon}>
                <use href={`/sprite.svg#icon-${item.id}`}></use>
              </svg>

              <span>{item.label}</span>
            </button>
          ))}
        </div>
      </div>
      <button className={s.btnSearch} type="button">
        Search
      </button>
    </aside>
  );
};

export default Filters;
