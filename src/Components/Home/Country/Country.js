import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AppButton from '../ui/AppButton';
import './Country.css';

const Country = (props) => {
    const { data, setCart, cart } = props;
    const { name, flags } = data;
    const handleClick = (t) => {
        // alert(t)
    }
    const addToFav = (y) => {
        setCart([...cart, y])
    }
    return (
        <Col lg={4} md={6} className="mt-3">
            <Card>
                <Card.Title>{name.common}</Card.Title>
                <Card.Img src={flags.png} />
                <div className="d-flex align-items-center justify-content-around">
                    <Link to={`/country/${name?.common}`}><AppButton title={'Details'} buttonStyle={'details-button'} handleClick={handleClick} /> </Link>
                    <AppButton title={'Add to favorite'} buttonStyle={'fav-button'} handleClick={() => addToFav(data)} />
                    {/* <button className='details-button'>Details</button>
                    <button className='fav-button'>Add to favorite</button> */}
                </div>
                {/* <FontAwesomeIcon icon={faPlus} /> */}
            </Card>
        </Col>
    );
};

export default Country;