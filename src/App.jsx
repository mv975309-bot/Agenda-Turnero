import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Agenda from "./paginas/Agenda";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/agenda" replace />} />
        <Route path="/agenda" element={<MainLayout><Agenda /></MainLayout>} />
        <Route path="*" element={<Navigate to="/agenda" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
