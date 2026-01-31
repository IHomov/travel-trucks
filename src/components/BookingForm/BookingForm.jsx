import s from "./BookingForm.module.css";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import DatePicker from "react-datepicker";

const BookingForm = () => {
    const [startDate, setStartDate] = useState(null);
  return (
    <form className={s.bookingForm} onSubmit={(e) => e.preventDefault()}>
      <h3 className={s.formTitle}>Book your campervan now</h3>
      <p className={s.formText}>
        Stay connected! We are always ready to help you.
      </p>

      <div className={s.inputsGap}>
        <input type="text" placeholder="Name*" required />
        <input type="email" placeholder="Email*" required />
      <div className={s.dateWrapper}>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          placeholderText="Booking date*"
          dateFormat="dd.MM.yyyy"
          minDate={new Date()} // Не можна бронювати в минулому
          className={s.input}
          required
        />
        {/* Додаємо іконку календаря поверх інпуту */}
        
      </div>
        <textarea placeholder="Comment*" className={s.commentArea}></textarea>
      </div>

      <button type="submit" className={s.submitBtn}>
        Send
      </button>
    </form>
  );
};

export default BookingForm;
