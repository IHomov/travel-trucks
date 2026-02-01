import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Встановлюємо базовий URL для всіх запитів через axios
axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io";

/**
 * 1. Отримання списку кемперів з урахуванням фільтрів.
 * Використовує thunkAPI.getState() для доступу до поточного стану фільтрів.
 */
export const fetchCampers = createAsyncThunk(
  "campers/fetchAll",
  async ({ page = 1, limit = 4 }, thunkAPI) => {
    try {
      // Отримуємо актуальні фільтри з Redux-стейту
      const state = thunkAPI.getState();
      const { location, form, features } = state.filters;

      // Використовуємо URLSearchParams для зручного формування query-рядка
      const params = new URLSearchParams();
      params.append("page", page);
      params.append("limit", limit);
      // Додаємо локацію (якщо введена)
      if (location) {
        params.append("location", location);
      }

      // Додаємо тип кузова (якщо обрано)
      if (form) {
        params.append("form", form);
      }

      // Додаємо зручності (AC, kitchen, TV тощо)
      // MockAPI відфільтрує об'єкти, де ці поля мають значення true
      if (features && features.length > 0) {
        features.forEach((feature) => {
          // Спеціальна перевірка для трансмісії, якщо вона у масиві features
          if (feature === "automatic") {
            params.append("transmission", "automatic");
          } else {
            params.append(feature, "true");
          }
        });
      }

      // Робимо запит. Результат буде виглядати як: /campers?location=Kyiv&AC=true
      const response = await axios.get("/campers", { params });

      console.log("Завантажені дані:", response.data);

      // Перевіряємо формат відповіді (масив або об'єкт з полем items)
      return  response.data;
    } catch (error) {
      // Передаємо помилку в Redux для відображення користувачу
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

/**
 * 2. Отримання детальної інформації про ОДИН кемпер за його ID.
 * Використовується на сторінці DetailsPage.
 */
export const fetchCamperById = createAsyncThunk(
  "campers/fetchById",
  async (id, thunkAPI) => {
    // Приймаємо тільки id
    try {
      const response = await axios.get(`/campers/${id}`);
      return response.data; // Повертає один об'єкт кемпера
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
