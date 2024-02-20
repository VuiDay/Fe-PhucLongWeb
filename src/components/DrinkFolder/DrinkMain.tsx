import React, { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
import '../../assets/DrinkCSS/Drink.css'

export default function DrinkMain() {
  const headerContainer: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '20px'
  }
  const headDecor: React.CSSProperties = {
    display: "flex",
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }
  const breadCrum: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center'
  }
  const breadText: React.CSSProperties = {
    textDecoration: 'none',
    color: 'rgb(147 141 141)'
  }
  const picDecor: React.CSSProperties = {
    width: '300px',
    overflow: 'hidden',
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '50px'
  }
  const textDecor: React.CSSProperties = {
    textTransform: 'uppercase',
    color: '#0C713D'
  } 
  const route: React.CSSProperties = {
    display: 'flex',
    padding: 0,

  }
  const [selectedRoute, setSelectedRoute] = useState<string>('Drink')
  useEffect(()=>{
    const buttons = document.querySelectorAll('.bread > a')
    buttons.forEach((button)=>{
      button.addEventListener('click', ()=>{
        buttons.forEach((btn)=>{
          btn.classList.remove('Drink-active-button')
        })
        button.classList.add('Drink-active-button')
      })
    })
    const routeListItems = document.querySelectorAll('.route li')
    routeListItems.forEach((route)=>{
      route.addEventListener('click', ()=>{
        const routeText = route.textContent || ''
        setSelectedRoute(routeText)
        routeListItems.forEach((rt)=>{
          rt.classList.remove('routeActive')
        })
        route.classList.add('routeActive')
      })
    })
  }, [])
  return (
    <div style={headerContainer}>
      <div style={headDecor}>
        <div style={breadCrum}> 
          <p className="bread"><NavLink style={breadText} to={'/'}>Home</NavLink></p><p style={{padding: '0 5px', color: '#ccc'}}>/</p> 
          <p className="bread"><NavLink className={'Drink-active-button'} style={breadText} to={''}>{selectedRoute}</NavLink></p>
        </div>
        <div style={textDecor}>
          <h1 style={{fontFamily: 'Lora', fontSize: '36px'}}>{selectedRoute}</h1>
        </div>
        <div style={picDecor}>
          <img src="https://phuclong.com.vn/images/icon_tealeaves.png" alt="" />
        </div>
      </div>
      <div>
        <ul style={route} className="route">
            <li className="routeActive"><NavLink to={''}>Drink</NavLink></li>
            <li><NavLink to={'DinningOffer'}>Dinning Offers</NavLink></li> 
            <li><NavLink to={'Bakery'}>Bakery</NavLink></li>
        </ul>
      </div>
    </div>
  )
}
