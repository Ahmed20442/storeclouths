import { useState, useEffect } from "react";
import axios from 'axios';

function useProductData() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:8000/product/men");

                // Axios automatically checks for HTTP errors (status codes other than 2xx)
                const data = response.data;
                setProducts(data);
            } catch (error) {
                console.error("Error fetching product data:", error.message);
            }
        };

        fetchData();
    }, []);

    return products;
}

export default useProductData;