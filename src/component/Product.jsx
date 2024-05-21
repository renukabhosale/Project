import React, { useState, useEffect } from 'react';
import ProductService from '../ProductService';
import Navbar from './Navbar';

export default function Product() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState('All'); // New state for category

  useEffect(() => {
    let componentMounted = true;

    const getProduct = async () => {
      setLoading(true);
      try {
        const response = await ProductService.getAllProducts();
        if (componentMounted) {
          const products = response.data;
          setData(products);
          setFilter(products);
          setLoading(false);
        }
      } catch (error) {
        console.error("Failed to fetch products:", error);
        if (componentMounted) {
          setLoading(false);
        }
      }
    };

    getProduct();

    return () => {
      componentMounted = false;
    };
  }, []);

  

  // Function to handle category change
  const handleCategoryChange = (category) => {
    setCategory(category);
    if (category === 'All') {
      setFilter(data);
    } else {
      const filteredData = data.filter(product => product.category.toLowerCase() === category.toLowerCase());
      setFilter(filteredData);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {/* <Navbar category={category} /> */}
      <div className="container my-5 py-5">
        <div className="row mb-4">
          <div className="col-12">
            <h1>Latest Products</h1>
            <div className="btn-group" role="group" aria-label="Category filter">
              <button type="button" className="btn btn-outline-primary" onClick={() => handleCategoryChange('All')}>All</button>
              <button type="button" className="btn btn-outline-primary" onClick={() => handleCategoryChange("men's clothing")}>Men's Clothing</button>
              <button type="button" className="btn btn-outline-primary" onClick={() => handleCategoryChange("women's clothing")}>Women's Clothing</button>
              <button type="button" className="btn btn-outline-primary" onClick={() => handleCategoryChange('jewelery')}>Jewelry</button>
              <button type="button" className="btn btn-outline-primary" onClick={() => handleCategoryChange('electronics')}>Electronics</button>
            </div>
          </div>
        </div>
        <div className="row">
          {filter.map((product) => (
            <div key={product.id} className="col-3 mb-4">
              <div className="card h-100 text-center p-4">
                <img src={product.image} className="card-img-top" alt={product.title} />
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text">${product.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}