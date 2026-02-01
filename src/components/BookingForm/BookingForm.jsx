import { useForm, Controller } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import toast from "react-hot-toast";
import s from "./BookingForm.module.css";

const BookingForm = () => {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      bookingDate: null,
      comment: "",
    },
  });

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    // Імітація успішного запиту
    toast.success("Booking successful!");
    reset();
  };

  return (
    <div className={s.bookingForm}>
      <h3 className={s.formTitle}>Book your campervan now</h3>
      <p className={s.formText}>Stay connected! We are always ready to help you.</p>

      <form onSubmit={handleSubmit(onSubmit)} className={s.inputsGap} noValidate>
        {/* Поле Ім'я */}
        <div className={s.inputWrapper}>
          <input
            {...register("name", { required: "Name is required" })}
            className={`${s.inputField} ${errors.name ? s.inputError : ""}`}
            placeholder="Name*"
          />
          {errors.name && <p className={s.errorText}>{errors.name.message}</p>}
        </div>

        {/* Поле Email */}
        <div className={s.inputWrapper}>
          <input
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            })}
            className={`${s.inputField} ${errors.email ? s.inputError : ""}`}
            placeholder="Email*"
          />
          {errors.email && <p className={s.errorText}>{errors.email.message}</p>}
        </div>

        {/* Поле Дата (через Controller для DatePicker) */}
        <div className={s.inputWrapper}>
          <Controller
            control={control}
            name="bookingDate"
            rules={{ required: "Date is required" }}
            render={({ field }) => (
              <DatePicker
                selected={field.value}
                onChange={(date) => field.onChange(date)}
                placeholderText="Booking date*"
                dateFormat="dd.MM.yyyy"
                minDate={new Date()}
                className={`${s.inputField} ${errors.bookingDate ? s.inputError : ""}`}
                wrapperClassName={s.datePickerWrapper}
              />
            )}
          />
          
          {errors.bookingDate && (
            <p className={s.errorText}>{errors.bookingDate.message}</p>
          )}
        </div>

        {/* Поле Коментар */}
        <div className={s.inputWrapper}>
          <textarea
            {...register("comment")}
            className={s.commentArea}
            placeholder="Comment"
            rows="4"
          />
        </div>

        <button type="submit" className={s.submitBtn}>
          Send
        </button>
      </form>
    </div>
  );
};

export default BookingForm;