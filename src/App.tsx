import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./routes/HomePage";
import NotFoundPage from "./routes/NotFound";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
