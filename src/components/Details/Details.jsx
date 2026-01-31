import { useParams } from 'react-router-dom';
import Features from '../Features/Features';
import Reviews from '../Reviews/Reviews';
import BookingForm from '../BookingForm/BookingForm'; 
import s from './Details.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { fetchCamperById } from '../../redux/campersOps';
import Loader from '../Loader/Loader';

const DetailsPage = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('features');
  const dispatch = useDispatch();
  const camper = useSelector(state => state.campers.currentCamper);
  const isLoading = useSelector(state => state.campers.isLoading);

  useEffect(() => {
    dispatch(fetchCamperById(id));
  }, [dispatch, id]);

  if (isLoading) return <Loader />;
  if (!camper) return null;

 return (
    <section className={s.section}>
      {/* 1. Хедер (Назва, Рейтинг, Ціна) */}
      <div className={s.header}>
        <h2 className={s.name}>{camper.name}</h2>
        <div className={s.meta}>
          <div className={s.stats}>
            <div className={s.ratingBox}>
              <svg width="16" height="16" className={s.iconStar}>
                <use href="/sprite.svg#icon-Rating"></use>
              </svg>
              <span className={s.ratingText}>
                {camper?.rating} ({camper?.reviews?.length} Reviews)
              </span>
            </div>
            <div className={s.locationBox}>
              <svg width="16" height="16" className={s.iconMap}>
                <use href="/sprite.svg#icon-Map"></use>
              </svg>
              <span className={s.locationText}>{camper?.location}</span>
            </div>
          </div>
        </div>
        <p className={s.price}>€{camper.price.toFixed(2)}</p>
      </div>

      {/* 2. Галерея */}
      <div className={s.gallery}>
        {camper.gallery.map((img, index) => (
          <img key={index} src={img.original} alt="Camper" className={s.galleryImage} />
        ))}
      </div>

      {/* 3. Опис (тепер на всю ширину сторінки) */}
      <p className={s.description}>{camper.description}</p>

      {/* 4. Таби (тепер теж на всю ширину) */}
      <div className={s.tabsList}>
        <button 
          className={`${s.tabBtn} ${activeTab === 'features' ? s.active : ''}`} 
          onClick={() => setActiveTab('features')}
        >
          Features
        </button>
        <button 
          className={`${s.tabBtn} ${activeTab === 'reviews' ? s.active : ''}`} 
          onClick={() => setActiveTab('reviews')}
        >
          Reviews
        </button>
      </div>

      {/* 5. ОСНОВНИЙ КОНТЕНТ (Дві колонки починаються ТУТ) */}
      <div className={s.mainContent}>
        <div className={s.infoSide}>
          <div className={s.tabContent}>
            {activeTab === 'features' && <Features camper={camper} />}
            {activeTab === 'reviews' && <Reviews reviews={camper.reviews} />}
          </div>
        </div>
        
        <aside className={s.formSide}>
          <BookingForm />
        </aside>
      </div>
    </section>
  );
};

export default DetailsPage;