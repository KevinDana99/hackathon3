import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./routes/HomePage";
import NotFoundPage from "./routes/NotFound";
import OtherPage from "./routes/OtherPage";
import Layout from "./components/layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/other" element={<OtherPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
