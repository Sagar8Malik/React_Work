import React, { useState, useEffect } from "react";
import useDebounce from "./useDebounce";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce(query, 500);

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setQuery(inputValue);
  };

  useEffect(() => {
    onSearch(debouncedQuery);
  }, [debouncedQuery, onSearch]);

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Enter Keywords to search..."
        value={query}
        onChange={handleInputChange}
      />
      <button>Search</button>
    </div>
  );
};

export default SearchBar;
