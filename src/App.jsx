import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Navbar from './component/Navbar';
import Shop from './pages/Shop';
import Category from './pages/Category';
import Product from './pages/Product';
import Cart from './pages/Cart';
import LoginSign from './pages/LoginSign';
import Footer from './component/Footer';
import banner_men from './assets/banner_mens.png';
import banner_women from './assets/banner_women.png';
import banner_kid from './assets/banner_kids.png';

function App() {
  return (
    <div>
      <BrowserRouter basename="/portfolioecommerce">
          <Navbar />
        <Routes>
          <Route exact path='/portfolioecommerce' element={<Shop />} />
          <Route exact path='/men' element={<Category banner={banner_men} category="men" />} />
          <Route exact path='/women' element={<Category banner={banner_women} category="women" />} />
          <Route exact path='/kids' element={<Category banner={banner_kid} category="kid" />} />
          <Route exact path='/product' element={<Product />}> 
            <Route path=':id' element={<Product />} />
          </Route>
          <Route exact path='/cart' element={<Cart />} />
          <Route exact path='loginSign' element={<LoginSign />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

