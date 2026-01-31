
import { useDispatch , useSelector} from 'react-redux';
import {fetchCampers} from '../redux/campersOps';
import CamperCard from '../components/CamperCards/CamperCard';
import s from './CatalogPage.module.css';
import { useEffect } from 'react';
import Filters from '../components/Filters/Filters';


const CatalogPage = () => {
  const dispatch = useDispatch();
  const campers = useSelector(state => state.campers.items);
  const isLoading = useSelector(state => state.campers.isLoading);
  const error = useSelector(state => state.campers.error);
  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  
  return (
    <div className={s.catalogPage}>
      <div className={s.container}>
        
        {/* ЛІВА ЧАСТИНА: Фільтри */}
        <aside className={s.sidebar}>
          <Filters />
        </aside>

        {/* ПРАВА ЧАСТИНА: Список карток */}
        <main className={s.content}>
          {isLoading && <p className={s.message}>Loading campers...</p>}
          {error && <p className={s.error}>Error: {error}</p>}

          <div className={s.cardList}>
            {/* Тимчасово напишемо текст, поки не зробимо компонент CamperCard */}
            {campers.length > 0 ? (
              campers.map(camper => (
                <CamperCard key={camper.id} camper={camper} />
              ))
            ) : (
              !isLoading && <p className={s.message}>No campers found.</p>
            )}
            
          </div>
          
          {/* Кнопка Load More (поки просто верстка) */}
          {campers.length > 0 && (
            <button className={s.loadMoreBtn}>Load more</button>
          )}
        </main>

      </div>
    </div>
  );
};

export default CatalogPage;