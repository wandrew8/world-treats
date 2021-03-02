import React, { useState, useEffect, useCallback } from "react";

const useFetch = (url, type) => {
    const [data, setData] = useState(type);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        async function fetchData() {
            try {
                
                const response = await fetch(url);
                const json = await response.json();
                setData(json);
                setLoading(false);
            } catch (err) {
                console.log(err);
            }
        }
        fetchData();
    }, [url]);
  
    return {loading,data};
  };

  export default useFetch;