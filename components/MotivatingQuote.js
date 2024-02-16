import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MotivatingQuote = () => {
    const [quote, setQuote] = useState('');
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchQuote = async () => {
            try {
                let response;
                do {
                    response = await axios.get('https://api.quotable.io/random');
                } while (response.data.content.length > 50); // Adjust the maximum length as per your definition of "short"
                
                setQuote(response.data.content);
            } catch (error) {
                console.error('Error fetching quote:', error);
                setError('Error fetching quote');
            } finally {
                setLoading(false);
            }
        };

        fetchQuote();
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p style={{ color: 'red' }}>Error: {error}</p>;
    }

    return (
        <p style={{ fontFamily: 'Arial, sans-serif', fontSize: '40px', color: 'white' }}>
            <strong>{quote}</strong>
        </p>
    );
};

export default MotivatingQuote;
