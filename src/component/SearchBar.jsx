import React, { useState, useEffect } from 'react';
import ProductService from '../ProductService';

const SearchBar = ({ category }) => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [cache, setCache] = useState({});

  useEffect(() => {
    if (query.length > 1) {
      const cacheKey = `${category}-${query}`;
      if (cache[cacheKey]) {
        setSuggestions(cache[cacheKey]);
      } else {
        fetchSuggestions(query, category);
      }
    } else {
      setSuggestions([]);
    }
  }, [query, category]);

  const fetchSuggestions = async (searchTerm, category) => {
    try {
      const response = await ProductService.getAllProducts();
      const products = response.data;
      const filteredSuggestions = products.filter(product => 
        product.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (category === 'All' || product.category.toLowerCase() === category.toLowerCase())
      );
      const cacheKey = `${category}-${searchTerm}`;
      setSuggestions(filteredSuggestions);
      setCache({ ...cache, [cacheKey]: filteredSuggestions });
    } catch (error) {
      console.error('Failed to fetch suggestions:', error);
    }
  };

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  return (
    <div className="search-bar">
      <input 
        className="form-control me-2" 
        type="search" 
        placeholder="Search" 
        aria-label="Search" 
        value={query}
        onChange={handleInputChange}
      />
      {suggestions.length > 0 && (
        <ul className="list-group position-absolute">
          {suggestions.map((suggestion) => (
            <li key={suggestion.id} className="list-group-item">
              {suggestion.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
