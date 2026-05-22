import { Link } from 'react-router-dom'
import logo from '../../assets/Logo.svg'
import bagIcon from '../../assets/shopping-bag.svg'
import accountIcon from '../../assets/Frame.svg'
import { useCart } from '../../context/CartContext'

function Header() {
  const { openBag } = useCart()

  return (
    <header className="bg-surface h-[106px] px-11 flex items-center justify-between border-b border-surface-alt">
      <Link to="/">
        <img src={logo} alt="BEWEAR" className="h-6" />
      </Link>

      <div className="flex items-center gap-3">
        <button onClick={openBag} aria-label="Sacola">
          <img src={bagIcon} alt="Sacola" className="h-5 w-5" />
        </button>
        <span className="text-text-secondary">|</span>
        <Link to="/orders" aria-label="Meus pedidos">
          <img src={accountIcon} alt="Meus pedidos" className="h-5 w-5" />
        </Link>
      </div>
    </header>
  )
}

export default Header
