import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import BagModal from './components/layout/BagModal'
import HomePage from './pages/HomePage'
import ProductPage from './pages/ProductPage'
import BagPage from './pages/BagPage'
import CheckoutIdentificationPage from './pages/CheckoutIdentificationPage'
import CheckoutPaymentPage from './pages/CheckoutPaymentPage'
import OrdersPage from './pages/OrdersPage'

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-surface flex flex-col max-w-[1440px] mx-auto">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/product/:id" element={<ProductPage />} />
            <Route path="/bag" element={<BagPage />} />
            <Route path="/checkout/identification" element={<CheckoutIdentificationPage />} />
            <Route path="/checkout/payment" element={<CheckoutPaymentPage />} />
            <Route path="/orders" element={<OrdersPage />} />
          </Routes>
        </main>
        <Footer />
        <BagModal />
      </div>
    </BrowserRouter>
  )
}

export default App
