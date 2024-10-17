import { useState, useEffect } from 'react';

const useFetch = (dir) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchAPI = async () => {
            try {
                const response = await fetch(`http://192.168.1.108:3000/api/${dir}`);
                const result = await response.json();
                setData(result);
            } catch (err) {
                console.error(err);
            }
        };

        fetchAPI();
    }, [dir]);

    return data;
};

export default useFetch;
