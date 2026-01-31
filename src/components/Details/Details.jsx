import { useParams } from 'react-router-dom';
// import Features from '../Features/Features';
// import Reviews from '../Reviews/Reviews';
// import BookingForm from '../BookingForm/BookingForm'; // Створимо згодом
import s from './Details.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchCamperById } from '../../redux/campersOps';
import Loader from '../Loader/Loader';




const DetailsPage = () => {
  const { id } = useParams(); // Отримуємо ID кемпера з URL
  const dispatch = useDispatch(); // Заглушка для dispatch, заміни на реальний хук з Redux або контексту
const camper = useSelector(state => state.campers.currentCamper);
  const isLoading = useSelector(state => state.campers.isLoading);

  useEffect(() => {
    // Тепер ми РЕАЛЬНО використовуємо id для запиту
    dispatch(fetchCamperById(id));
  }, [dispatch, id]);

  if (isLoading) return <Loader />;
  if (!camper) return null;
 return (
  <section className={s.section}>
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

    {/* Галерея з макета */}
    <div className={s.gallery}>
      {camper.gallery.map((img, index) => (
        <img key={index} src={img.original} alt="Camper" className={s.galleryImage} />
      ))}
    </div>

    <p className={s.description}>{camper.description}</p>

    <div className={s.mainContent}>
      <div className={s.infoSide}>
        {/* Тут твої таби Features / Reviews */}
        <div className={s.tabs}>
           {/* ... логіка табів, яку ми обговорювали */}
        </div>
      </div>
      
      {/* <aside className={s.formSide}>
        <BookingForm />
      </aside> */}
    </div>
  </section>
);
};

export default DetailsPage;