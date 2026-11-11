import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './pages/Home';
import Footer from './components/layout/Footer';
import WhatsAppChat from './components/layout/WhatsAppChat';

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Pages not built yet fall back to Home for now */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
       <WhatsAppChat />
    </BrowserRouter>
  );
}
