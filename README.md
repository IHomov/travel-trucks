
🚐 TravelTrucks — Camper Rental Service
TravelTrucks — це сучасний веб-додаток для компанії, що надає послуги оренди кемперів. Проєкт створений для мандрівників, які шукають комфортний спосіб забронювати дім на колесах для своїх пригод.

🚀 Основна мета
Розробити зручний та інтуїтивно зрозумілий фронтенд-інтерфейс, який дозволяє користувачам переглядати каталог доступних кемперів, фільтрувати їх за характеристиками, читати відгуки та здійснювати онлайн-бронювання.

🛠 Функціонал
Домашня сторінка: Привітальна секція з Hero-банером та закликом до дії.

Каталог: Список усіх доступних кемперів з можливістю пагінації ("Load More").

Фільтрація: Пошук за локацією та характеристиками (AC, кухня, тип трансмісії тощо).

Детальна сторінка: Повна інформація про кемпер, галерея фото, технічні характеристики.

Відгуки: Перегляд реальних оцінок та коментарів користувачів.

Бронювання: Інтерактивна форма для замовлення кемпера з валідацією полів.

Обране: Можливість додавати кемпери в особистий список (збереження між сесіями).

💻 Стек технологій
React (Vite) — для побудови інтерфейсу.

Redux Toolkit — управління глобальним станом додатка.

React Router — навігація між сторінками.

Axios — взаємодія з зовнішнім API.

CSS Modules — для ізольованої та чистої стилізації.

SVG Sprites — для оптимізації роботи з іконками

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# TravelTrucks - Camper Rental Service

A modern web application for discovering and booking camper vans. The project features a catalog of campers with detailed descriptions, equipment filters, and a booking system.

## 🚀 Key Features
- **Camper Catalog**: View a list of available campers with pagination.
- **Advanced Filtering**: Filter by location, vehicle type, and equipment (AC, Kitchen, TV, etc.).
- **Favorites System**: Save your favorite campers for quick access.
- **Booking Form**: Integrated form for reserving campers with date selection and validation.
- **Detailed View**: Detailed specifications, features, and user reviews for each camper.

## 🛠️ Tech Stack
- **Frontend**: React 19 (Vite)
- **State Management**: Redux Toolkit (React-Redux)
- **Data Fetching**: Axios
- **Forms & Validation**: Formik / React Hook Form
- **Routing**: React Router 7
- **Date Picking**: React Datepicker
- **Notifications**: React Hot Toast
- **Backend API**: Mockapi.io

## 📦 Installation & Setup

Follow these steps to get the project running locally:

1. **Clone the repository:**
   ```bash
   git clone [your-repository-link]
2. **Navigate to the project folder:**
cd travel-trucks
3. **Install dependencies:**
npm install
4. **Start the development server:**
npm run dev
5. **Open the app: Navigate to http://localhost:5173 in your browser.**
Project Notes
API Filtering: This project uses a MockAPI backend. Note that equipment filters (e.g., TV, AC) are case-sensitive to match the database schema.

Scripts:

npm run build: Build the project for production.

npm run lint: Run ESLint to check for code quality.

Developed as a technical task for the TravelTrucks service.


   

