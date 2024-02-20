import HeaderMenu from "../components/HeaderMenu";
import Footer from "../components/Footer";
import { Outlet } from 'react-router-dom'
import HeaderTop from "../components/HeaderTop";

export default function layout() {
  return (
    <div>
      <HeaderTop/>
      <HeaderMenu/>
      <main>
        <Outlet/>
      </main>
      <Footer/>
    </div>
  )
}
