import { useState } from "react";
import { BiSearch } from "react-icons/bi";
import './AllStyles.css';

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleArticleSearch = () => {
    onSearch(query);
  };

  return (
    <>
      <div className="search-btn">
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          placeholder="Search articles..."
        />
        <span onClick={handleArticleSearch}><BiSearch size={20}/></span>
      </div>
    </>
  );
}

export default SearchBar;
