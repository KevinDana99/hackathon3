import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./routes/HomePage";
import NotFoundPage from "./routes/NotFound";
import OtherPage from "./routes/OtherPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/other" element={<OtherPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
