
import { useDispatch , useSelector} from 'react-redux';
import {fetchCampers} from '../redux/campersOps';
import CamperCard from '../components/CamperCards/CamperCard';
import s from './CatalogPage.module.css';
import { useEffect } from 'react';
import Filters from '../components/Filters/Filters';
import { incrementPage, resetItems } from '../redux/campersSlice';
import { useSearchParams } from 'react-router-dom';
import { setFilters } from '../redux/filtersSlice';


const CatalogPage = () => {
  const dispatch = useDispatch();
  const campers = useSelector(state => state.campers.items);
  const total = useSelector((state) => state.campers.total);
  const page = useSelector((state) => state.campers.page);
  const isLoading = useSelector(state => state.campers.isLoading);
  const error = useSelector(state => state.campers.error);
  const [searchParams] = useSearchParams();
  useEffect(() => {
    const params = {
    location: searchParams.get('location') || '',
    form: searchParams.get('form') || '',
    features: searchParams.get('features')?.split(',').filter(Boolean) || [],
  };

  
  dispatch(setFilters(params));
    dispatch(resetItems());
    dispatch(fetchCampers({page: 1, limit: 4, ...params}));
  }, [searchParams, dispatch]);

  const handleLoadMore= () => {
    const nextPage = page +1;
    dispatch(incrementPage());
    dispatch(fetchCampers({page: nextPage, limit:4}));
  };
const canLoadMore = campers.length < total;
  return (
    <div className={s.catalogPage}>
      <div className={s.container}>
        
       
        <aside className={s.sidebar}>
          <Filters />
        </aside>

        
        <main className={s.content}>
          {isLoading && <p className={s.message}>Loading campers...</p>}
         {error && !error.includes("404") && (
  <p className={s.error}>Something went wrong: {error}</p>
)}

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