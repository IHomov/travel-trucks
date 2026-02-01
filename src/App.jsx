import { Header } from "./components/Header/Header";
import AppRoutes from "./routes/AppRoutes";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
    <Header />
    <main>
      <Toaster position="top-right" reverseOrder={false} />
       <AppRoutes />
       </main>
    
    </>
  )
}

export default App;
