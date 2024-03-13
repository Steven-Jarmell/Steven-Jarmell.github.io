import Header from "./Header/Header"
import Footer from "./Footer/Footer"
import "../Styles/Layout.css"

type LayoutProps = {
    children: React.ReactNode;
}

const Layout = ({children}: LayoutProps) => {
    return (
        <div className="layout__container">
            <Header />
            {children}
            <Footer />
        </div>
    )
}

export default Layout;