
import { useDispatch , useSelector} from 'react-redux';
import {fetchCampers} from '../redux/campersOps';
import CamperCard from '../components/CamperCards/CamperCard';
import s from './CatalogPage.module.css';
import { useEffect } from 'react';
import Filters from '../components/Filters/Filters';
import { incrementPage, resetItems } from '../redux/campersSlice';


const CatalogPage = () => {
  const dispatch = useDispatch();
  const campers = useSelector(state => state.campers.items);
  const total = useSelector((state) => state.campers.total);
  const page = useSelector((state) => state.campers.page);
  const isLoading = useSelector(state => state.campers.isLoading);
  const error = useSelector(state => state.campers.error);
  useEffect(() => {
    dispatch(resetItems());
    dispatch(fetchCampers({page: 1, limit: 4}));
  }, [dispatch]);

  const handleLoadMore= () => {
    const nextPage = page +1;
    dispatch(incrementPage());
    dispatch(fetchCampers({page: nextPage, limit:4}));
  };
const canLoadMore = campers.length < total;
  return (
    <div className={s.catalogPage}>
      <div className={s.container}>
        
        {/* ЛІВА ЧАСТИНА: Фільтри */}
        <aside className={s.sidebar}>
          <Filters />
        </aside>

        
        <main className={s.content}>
          {isLoading && <p className={s.message}>Loading campers...</p>}
          {error && <p className={s.error}>Error: {error}</p>}

          <div className={s.cardList}>
            
            {campers.length > 0 ? (
              campers.map(camper => (
                <CamperCard key={camper.id} camper={camper} />
              ))
            ) : (
              !isLoading && <p className={s.message}>No campers found.</p>
            )}
            
          </div>
          
         
          {campers.length > 0 && canLoadMore && !isLoading && (
            <button className={s.loadMoreBtn} onClick = {handleLoadMore}>Load more</button>
          )}
        </main>

      </div>
    </div>
  );
};

export default CatalogPage;