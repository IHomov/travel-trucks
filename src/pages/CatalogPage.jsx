import s from './CatalogPage.module.css';

const CatalogPage = () => {
  return (
    <div className={s.catalogPage}>
      <div className={s.container}>
        
        {/* ЛІВА ЧАСТИНА: Фільтри */}
        <aside className={s.sidebar}>
          {/* Тут буде компонент Filters (Локація, Тип, Обладнання) */}
          <div className={s.locationWrapper}>
            <label className={s.label}>Location</label>
            <input type="text" placeholder="City, Country" className={s.locationInput} />
          </div>
          
          <div className={s.filtersGroup}>
            <p className={s.filtersTitle}>Filters</p>
            {/* Сюди згодом додамо іконки обладнання */}
          </div>
        </aside>

        {/* ПРАВА ЧАСТИНА: Список карток */}
        <main className={s.content}>
          <div className={s.cardList}>
            {/* Тимчасово напишемо текст, поки не зробимо компонент CamperCard */}
            <p>Тут будуть картки кемперів...</p>
          </div>
          
          {/* Кнопка Load More (поки просто верстка) */}
          <button className={s.loadMoreBtn}>Load more</button>
        </main>

      </div>
    </div>
  );
};

export default CatalogPage;