import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './components/routing/Home'
import Aboutus from './components/routing/Aboutus'
import Services from './components/routing/Services'
import Login from './components/routing/Login'
import Products from './components/routing/Products'
import PageNotFound from './components/routing/PageNotFound'
import Navbar from "./components/routing/Navbar"

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="aboutus" element={<Aboutus/>}/>
            <Route path="services" element={<Services/>}/>
            <Route path="login" element={<Login/>}/>
            <Route path="products" element={<Products/>}/>
            <Route path="*" element={<PageNotFound/>}/>
          </Routes>
    </BrowserRouter>
  );
}

export default App;
