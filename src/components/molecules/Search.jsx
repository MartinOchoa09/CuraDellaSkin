import { useState } from "react";


function Search({onSearch}) {
    const [searchTerm, setSearchTerm] = useState("");

    const handleInputChange = (e) => {
        setSearchTerm(event.target.value);
      };
  
      const handleSearch = (e) => {
        onSearch(searchTerm)
      }

    return ( 
        <form className="search-form-secundario">
          <input type="text" value={searchTerm} onChange={handleInputChange} placeholder="Buscar" className="search-box-secundario"  />
          <button type="submit" onClick={handleSearch} className="search-button-secundario">Buscar</button>
        </form>
     );
}

export default Search;