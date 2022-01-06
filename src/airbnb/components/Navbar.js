import logo from '../assets/airbnb.png'
import './Navbar.css'

export const Navbar = () => (
  <nav className='air-nav'>
    <div className='air-nav--container'>
      <img src={logo} alt='logo' />
    </div>
  </nav>
)
