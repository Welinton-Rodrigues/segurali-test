import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import HomePage from './pages/HomePage'

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-surface flex flex-col max-w-[1440px] mx-auto">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
