import { Link } from 'react-router-dom'
import logo from '../../assets/Logo.svg'
import bagIcon from '../../assets/shopping-bag.svg'
import accountIcon from '../../assets/Frame.svg'

function Header() {
  return (
    <header className="bg-surface h-[106px] px-11 flex items-center justify-between border-b border-surface-alt">
      <Link to="/">
        <img src={logo} alt="BEWEAR" className="h-6" />
      </Link>

      <div className="flex items-center gap-3">
        <Link to="/bag" aria-label="Sacola">
          <img src={bagIcon} alt="Sacola" className="h-5 w-5" />
        </Link>
        <span className="text-text-secondary">|</span>
        <button aria-label="Conta">
          <img src={accountIcon} alt="Conta" className="h-5 w-5" />
        </button>
      </div>
    </header>
  )
}

export default Header
