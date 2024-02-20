import { useEffect, useState } from 'react'
import logo from '../assets/Picture//LogoWeb/logo.png'
import logo1 from '../assets/Picture/LogoWeb/logo_1.png'
import logo2 from '../assets/Picture/LogoWeb/logo_2.png'
import '../assets/LogoWeb/LogoWeb.css'

export default function Check() {
    const images = [logo, logo1 ,logo2]
    const [curretnIndex, setCurrentIndex] = useState(0)
    useEffect(()=>{
        const interval = setInterval(()=>{
            setCurrentIndex(curretnIndex === images.length - 1 ? 0 : curretnIndex + 1)
        }, 1000)
        return ()=>clearInterval(interval)
    }, [images])
  return (
    <div>
        {images.map((image, index)=>
          <img className='logo-web' src={image} key={index} style={{display: index === curretnIndex ? 'block' : 'none'}} alt="" />
        )}
    </div>
  )
}
