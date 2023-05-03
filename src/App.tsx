import './Styles/App.css'
import { Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout"
import MainContent from './Components/MainContent';
import Projects from './Components/Projects/Projects';

const App = () => {
  return (
    <Routes>
        <Route path="/" element={<Layout />}>
            <Route index element={<MainContent />} />
            <Route path="projects" element={<Projects />} />
        </Route>
    </Routes>
  )
}

export default App
