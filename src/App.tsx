import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TrangChu from './Pages/TrangChu';
import Sukien from './Pages/SuKien';
import LienHe from './Pages/LienHe';
import Thanhtoan from './Pages/ThanhToan';
import ThanhToanThanhCong from './Pages/ThanhToanThanhCong';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<TrangChu />} />
    <Route path="/trangchu" element={<TrangChu />} />
    <Route path="/sukien" element={<Sukien />} />
    <Route path="/lienhe" element={<LienHe />} />
    <Route path="/thanhtoan" element={<Thanhtoan />} />
    <Route path="/thanhtoanthanhcong" element={<ThanhToanThanhCong />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
