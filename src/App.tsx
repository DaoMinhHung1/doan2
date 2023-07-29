import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TrangChu from './Pages/TrangChu';
import Sukien from './Pages/SuKien';
import LienHe from './Pages/LienHe';
import Thanhtoan from './Pages/ThanhToan';
import ThanhToanThanhCong from './Pages/ThanhToanThanhCong';
import ChiTietSuKien from './Pages/ChiTietSuKien';
import HeaderComponent from './Component/HeaderComponent';
import { store } from './redux/store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>
    <Routes>
    <Route path="/header" element={<HeaderComponent />} />
    <Route path="/" element={<TrangChu />} />
    <Route path="/trangchu" element={<TrangChu />} />
    <Route path="/sukien" element={<Sukien />} />
    <Route path="/chitietsukien/:tenSK" element={<ChiTietSuKien />} />
    <Route path="/lienhe" element={<LienHe />} />
    <Route path="/thanhtoan" element={<Thanhtoan />} />
    <Route path="/thanhtoanthanhcong" element={<ThanhToanThanhCong />} />
    </Routes>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
