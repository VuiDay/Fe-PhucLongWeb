import { Outlet } from "react-router-dom"
import DrinkMain from "../components/DrinkFolder/DrinkMain"

export default function Drinks() {
  return (
    <div>
      <DrinkMain/>
      <main>
        <Outlet/>
      </main>
    </div>
  )
}
