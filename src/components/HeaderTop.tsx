import logoShip from '../assets/Picture/LogoShip/logo_ship.png'
import LogoWeb from '../components/LogoWeb'
import { Link } from 'react-router-dom'
import '../assets/HeaderCSS/HeaderTop.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import useStore from '../store/Store'
import { StoreState } from '../store/Store'
import Cart from './Cart/Cart'
export default function HeaderTop() {
  const {dataChild} = useStore((state: StoreState)=> {
    return {dataChild: state.dataChild, count: state.count}
  })
  const go = dataChild.reduce((start, item)=>{
    return start + item.quantity
  },0)
  return (
    <div className='header-top'>
        <div className='logo-ship'>
            <a href="#">
                <img src={logoShip} alt="" />
            </a>
        </div>
        <div className='logo-web'>
          <LogoWeb/>      
        </div>
        <div className='header-right'>
          <div className='header-login'>
            <Link className='header-login-a' to='#'>Login</Link>
          </div>
          <div className='header-button-card'>
              <span>Card</span>
              <span className='button-card'>
                <i><FontAwesomeIcon icon={faCartShopping}/></i>
                <span style={{color: 'white'}}>{go}</span>
              </span>
              <Cart></Cart>
          </div>
        </div>
    </div>
  )
}
