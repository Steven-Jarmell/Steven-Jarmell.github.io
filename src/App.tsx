import Header from './Components/Header'
import './Styles/App.css'
import { Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout"
import MainContent from './Components/MainContent';

const App = () => {
  return (
    <Routes>
        <Route path="/" element={<Layout />}>
            <Route index element={<MainContent />} />
        </Route>
    </Routes>
  )
}

export default App
