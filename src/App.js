import React from 'react'
import './App.css';
import Layout from './pages/Layout'
import Home from './pages/Home'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductsByType from './pages/ProductsByType';
import MerchList from './pages/MerchList';
import ProductDetails from './pages/ProductDetails'
import Cart from './pages/Cart';
import Payment from './pages/Payment';
import ContactUs from './pages/ContactUs';
import News from './pages/News'
import Article from "./pages/Article"
import Settings from './pages/Settings';
import AboutUs from './pages/AboutUs';
import Policy from './pages/Policy';
import ResetPassword from './pages/ResetPassword';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="flash-sale" element={<MerchList/>} />
          <Route path="san-pham-ban-chay" element={<MerchList/>} />
          <Route path="san-pham-moi" element={<MerchList/>} />
          <Route path="tin-tuc" element={<></>} />
          <Route path="lien-he" element={<ContactUs/>} />
          <Route path="bep-ga-mini" element={<ProductsByType/>} />
          <Route path="chi-tiet-san-pham" element={<ProductDetails/>} />
          <Route path="gio-hang" element={<Cart/>} />
          <Route path="thanh-toan" element={<Payment/>} />
          <Route path="bai-viet" element={<News/>} />
          <Route path="article" element={<Article/>} />
          <Route path="quan-ly-tai-khoan" element={<Settings/>} />
          <Route path="gioi-thieu" element={<AboutUs/>} />
          <Route path="cau-hoi-thuong-gap" element={<Policy type="Câu hỏi thường gặp"/>} />
          <Route path="giai-quyet-khieu-nai" element={<Policy type="Giải quyết khiếu nại"/>} />
          <Route path="dieu-khoan-dich-vu" element={<Policy type="Điều khoản dịch vụ"/>} />
          <Route path="chinh-sach-giao-hang" element={<Policy type="Chính sách giao hàng"/>} />
          <Route path="chinh-sach-doi-tra" element={<Policy type="Chính sách đổi trả"/>} />
          <Route path="chinh-sach-bao-mat" element={<Policy type="Chính sách bảo mật"/>} />
          <Route path="chinh-sach-thanh-toan" element={<Policy type="Chính sách thanh toán"/>} />
          <Route path="chinh-sach-bao-hanh" element={<Policy type="Chính sách bảo hành"/>} />
          <Route path="forgotpassword" element={<ResetPassword/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
 
}
export default App;
