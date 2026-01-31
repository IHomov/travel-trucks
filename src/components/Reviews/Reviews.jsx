import s from './Reviews.module.css';

const Reviews = ({ reviews }) => {
  if (!reviews || reviews.length === 0) return <p>No reviews yet.</p>;

  return (
    <ul className={s.reviewList}>
      {reviews.map((rev, index) => (
        <li key={index} className={s.reviewItem}>
          <div className={s.userHeader}>
            <div className={s.avatar}>{rev.reviewer_name[0]}</div>
            <div>
              <p className={s.userName}>{rev.reviewer_name}</p>
              <div className={s.stars}>
                {/* Малюємо 5 зірок, зафарбовуємо тільки рейтинг */}
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className={i < rev.reviewer_rating ? s.starFull : s.starEmpty}>
                    <use href="/sprite.svg#icon-Rating"></use>
                  </svg>
                ))}
              </div>
            </div>
          </div>
          <p className={s.comment}>{rev.comment}</p>
        </li>
      ))}
    </ul>
  );
};

export default Reviews;