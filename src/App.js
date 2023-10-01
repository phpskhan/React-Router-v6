import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home'
import About from './components/About'
import User from './components/User'
import Navbar from './components/Navbar'
import NotFound from './components/NotFound'
import Product from './components/Product'
import Services from './components/Services'
import Websites from './components/services/Websites'
import Webapps from './components/services/WebApps'
import MobileApps from './components/services/MobileApps'
import ProductDetail from './components/ProductDetail'

function App() {
  return <div className='App'>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/product' element={<Product />} >
      <Route path=':id' element={<ProductDetail />} />
      <Route path='user' element={<User />} />
      </Route>
      <Route path='/services' element={<Services />} >
      <Route index element={<MobileApps />} />
      <Route path='websites' element={<Websites />} />
      <Route path='webapps' element={<Webapps />} />
      <Route path='mobileapps' element={<MobileApps />} />
      </Route>
      <Route path='*' element={<NotFound />} />
    </Routes>
  </div>;
}

export default App;
