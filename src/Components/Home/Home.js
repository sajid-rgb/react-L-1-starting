import React, { useEffect, useState } from 'react'
import { Container, Row } from 'react-bootstrap';
import Country from './Country/Country.js';
import { FakeData } from './Fakedata.js'
import Loader from './ui/Loader.js';
const Home = () => {
    const [countries, setCountries] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(response => response.json())
            .then(data => {
                setCountries(data);
                setIsLoading(false)
            })

    }, [])

    return (
        <div>
            <Container>
                <Row>
                    {
                        isLoading ? <Loader /> : countries.map(data => <Country data={data} key={data.id} />)
                    }
                </Row>
            </Container>
        </div>
    )
}

export default Home;