import React from 'react';
import './App.css';
import Navbar from './components/navBar/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { withRouter } from "react-router-dom";
import Home from './pages/home/home'
import Products from './pages/products/products'
import Donate from './pages/donate/donate'
import Blog from './pages/blog/blog'
import Calender from './pages/calender/calender'
import News from './pages/newsletter/newsletter'
import Contact from './pages/contact/contact'
import About from './pages/about/about'
import Partner from './pages/partner/partner'
import Cart from './pages/cart/cart'
import Footer from './components/Footer/Footer';
import TrackOrder from './pages/track-order/track-order';
import RefundPolicy from './pages/refund-policy/refund-policy';
import ShippingPolicy from './pages/shipping-policy/shipping-policy';
import ReturnPolicy from './pages/return-item/return-policy';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import Solo from './pages/Solo Product/solo';
import BlogReadMore from './pages/blog-read-more/blog-read-more';
import { Provider, createClient } from 'urql';


//connecting ql client to frontend
const client = createClient({url: 'http://localhost:1337/graphql'});


function App() {
  return( 
  <Router>
    <Provider value={client}>
   
    <ScrollToTop/>
    <Navbar />

    <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route exact path='/products' element={<Products/>}/>
      <Route exact path='/donate' element={<Donate/>}/>
      <Route exact path='/blog' element={<Blog/>}/>
      <Route exact path='/blog-read-more' element={<BlogReadMore/>}/>
      <Route exact path='/calender' element={<Calender/>}/>
      <Route exact path='/newsletter' element={<News/>}/>
      <Route exact path='/contact' element={<Contact/>}/>
      <Route exact path='/about' element={<About/>}/>
      <Route exact path='/partner' element={<Partner/>}/>
      <Route exact path='/cart' element={<Cart/>}/>
      <Route exact path='/track-order' element={<TrackOrder/>}/>
      <Route exact path='/refund-policy' element={<RefundPolicy/>}/>
      <Route exact path='/shipping-policy' element={<ShippingPolicy/>}/>
      <Route exact path='/return-policy' element={<ReturnPolicy/>}/>
      <Route exact path='/product' element={<Solo/>}/>
    </Routes>

  <Footer/>

 
  </Provider>
  </Router>
  );
}

export default App;
