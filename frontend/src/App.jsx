import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-surface flex flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<div className="p-8 text-center text-text-secondary">Home — em breve</div>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
