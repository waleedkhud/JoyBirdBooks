import React, { useState } from 'react'
import './products.css'
import Filter from '../../components/Filter/Filter'
import { Link } from 'react-router-dom'
import Rating from '@mui/material/Rating';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../redux/actions/productActions'
import { useEffect } from 'react';
import { CircularProgress } from '@mui/material';



//what is displayed on the products page
export default function Products() {
   const [filters, setFilters] = useState({
    genre: "",
    category: [],
    age: [],
  });
    return (
        <div className='container'>
         {/* class for filter please look at filter.js for component */}
             <div className='product-filter'>
                <Filter onApply={(filters) => setFilters(filters)} />
            </div>
          {/* class for products please look below for formatting */}
            <div className='products'>
            <div className='products-page-title'>
            <h1>Products</h1>
            </div>
            <div className='products-container'>
            <ProductCard filters={filters} />
            </div>
            </div>
            
           
        </div>
    )
    
}


function ProductCard({ filters }) {
  
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.products);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const filteredProducts = products.filter((product) => {
    // Filter by genre
    if (filters.genre !== "" && filters.genre !== product.genre) {
      return false;
    }

    // Filter by category
    if (
      filters.category.length > 0 &&
      !filters.category.includes(product.category)
    ) {
      return false;
    }

    // Filter by age
    if (
      filters.age.length > 0 &&
      !filters.age.includes(product.age)
    ) {
      return false;
    }

    return true;
  });

    return (
      <div className='productcontainer'>
        {loading ? (<CircularProgress/>) 
        : error ? (<p>error</p>) 
        : (filteredProducts.map((product) => (
          <div key={product._id} className="product-card">
          
           <div className="product_container" >
            {/* linking to individual product page */}
           <Link to={`/product/${product._id}`} style={{ textDecoration: 'none', color: 'inherit'}}> 
          <div className="product-body">
            <div className='product-image-container' >
          <img  className="product-image" src={product.image} alt={product.name}/>
          </div>
          <h1 className="product-title">{product.name}</h1>
          <Rating name="size-small" defaultValue={product.rating} size="small" readOnly/>
          <h3 className="product-author">By {product.author}</h3>
         <p className="product-price">${product.price}</p>
           
        
        
        </div>
         </Link>
      </div> 
      </div>
         )))}

      </div>
    )
  
  }
