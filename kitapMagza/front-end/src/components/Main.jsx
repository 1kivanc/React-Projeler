import { useContext } from "react"
import { Outlet } from "react-router-dom"
import { ThemeContext } from "../content"

const Main = () => {
    const {darkMode } = useContext(ThemeContext);
  return (
    <div className={`h-full w-full ${darkMode ? "dark" : ""}`}>
    <main>
        <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
            <div>Yan Panel</div>
            <div className="min-h-screen">
            <Outlet/>
            </div>
        </div>
    </main>
</div>
  )
}

export default Main