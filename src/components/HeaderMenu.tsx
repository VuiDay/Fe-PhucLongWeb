import { NavLink } from 'react-router-dom';
import '../assets/HeaderCSS/Header.css'

export default function Header() {
  return (
    <div className='header-container'>
        <ul>
            <li>
                <NavLink to={'/'}>Home</NavLink>
            </li>
            <li>
                <NavLink to={'Drinks'}>Drinks</NavLink>   
            </li>
            <li>
                <NavLink to={'Products'}>Products</NavLink>
            </li>
            <li>
                <NavLink to={'Promotions'}>Promotions</NavLink>
            </li>
            <li>
                <NavLink to={'AboutUs'}>About Us</NavLink>
            </li>
        </ul>
    </div>
  )
}
