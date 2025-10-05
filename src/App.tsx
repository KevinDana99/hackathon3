import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./routes/HomePage";
import NotFoundPage from "./routes/NotFound";
import Config from "./routes/ConfigPage";
import Layout from "./components/layout";
import PruebasPage from "./routes/Pruebas/PruebasPage";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <Routes>
      <Route path="/config" element={<Config />} />
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/test" element={<PruebasPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
