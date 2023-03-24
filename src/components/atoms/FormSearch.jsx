import {useState, useEffect, useCallback} from 'react';
import Search from '../molecules/Search';
import FormAgregarProducto from './FormAgregarProducto';
function FormSearch() {
    
    const [products, setProducts] = useState([]);

    const fetchProducts = useCallback(async (searchTerm) =>{
        const response = await fetch(`https://localhost:3000/productos/${searchTerm}`);
        const data = await response.json();
        setProducts(data);
    }, []);

    useEffect(() =>{
        fetchProducts("");

    }, [fetchProducts]);

    const handleSearch = useCallback((searchTerm) =>{
        fetchProducts(searchTerm);
    }, [fetchProducts]);
    
    return ( 
        <div>
            <Search onSearch={handleSearch} />
            <FormAgregarProducto products={products} />
        </div>

     );
}

export default FormSearch;