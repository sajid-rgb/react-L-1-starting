import React, { useEffect, useState } from 'react'
import { Container, Row } from 'react-bootstrap';
import fetchData from '../functions/fetchData.js';
import Country from './Country/Country.js';
import { FakeData } from './Fakedata.js'
import Loader from './ui/Loader.js';
import Searchbar from './ui/Searchbar.js';
const Home = () => {
    const [countries, setCountries] = useState([]);
    const [search, setSearch] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isSearch, setIsSearch] = useState(true);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetchData(setCountries, setIsLoading);

    }, [])

    const handleSearch = () => {
        console.log('search');
    }

    const handleSetText = (e) => {
        console.log(e.target.value);
        const searchResults = countries.filter(country => country.name.common.toLowerCase().includes(e.target.value.toLowerCase()));
        setSearch(searchResults);
        console.log(searchResults.length);
        searchResults.length === 0 ? setIsSearch(false) : setIsSearch(true);
    }

    return (
        <div>
            <Container>
                <Searchbar handleSearch={handleSearch} setText={handleSetText} />
                {
                    cart.length ? <div>
                        <p>Total Favorite country {cart.length}</p>
                    </div>:''
                }
                <Row>
                    {
                        isLoading ? <Loader /> : !isSearch ? <p> Nothing found </p> : search.length ? search.map(data => <Country data={data} key={data.name.common} setCart={setCart} cart={cart} />) : countries.map(data => <Country data={data} key={data.name.common} setCart={setCart} cart={cart}/>)
                    }
                </Row>
            </Container>
        </div>
    )
}

export default Home;