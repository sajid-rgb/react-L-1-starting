import React, { useEffect, useState } from 'react'
import { Container, Row } from 'react-bootstrap';
import fetchData from '../functions/fetchData.js';
import Country from './Country/Country.js';
import { FakeData } from './Fakedata.js'
import Loader from './ui/Loader.js';
const Home = () => {
    const [countries, setCountries] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchData(setCountries,setIsLoading);

    }, [])

    return (
        <div>
            <Container>
                <Row>
                    {
                        isLoading ? <Loader /> : countries.map(data => <Country data={data} key={data.name.common} />)
                    }
                </Row>
            </Container>
        </div>
    )
}

export default Home;