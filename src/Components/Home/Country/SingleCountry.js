import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import fetchData from '../../functions/fetchData';

const SingleCountry = () => {
    const [countries, setCountries] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    const param = useParams();
    useEffect(() => {
        fetchData(setCountries, setIsLoading);
    }, [])
    const country = countries.find(c => c?.name?.common === param?.common)
    return (
        <div className="d-flex flex-column align-items-center justify-content-center">
            <h1>{country?.name?.common}</h1>
            <img src={country?.flags?.png} className="img-fluid" />
        </div>
    );
};

export default SingleCountry;