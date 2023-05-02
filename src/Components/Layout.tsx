import { Outlet } from "react-router-dom"
import Header from "./Header/Header"
import Footer from "./Footer/Footer"
import "../Styles/Layout.css"

const Layout = () => {
    return (
        <div className="layout__container">
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Layout;