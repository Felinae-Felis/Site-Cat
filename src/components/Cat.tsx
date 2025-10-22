import React, { useState, useEffect } from "react";

const Cat = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://cataas.com/cat?json=true')
            .then(response => response.json())
            .then(data => setData(data))
            .then(() => setLoading(false))
    }, []);
    if (loading) {
        return <p>Loading...</p>;
    }
    return (
        <div>
            <img src={`${data.url}`} alt="Cat of the day " style={{ width: "200px", borderRadius: "12px" }}/>
            
        </div>
    );

};

export default Cat;