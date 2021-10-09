import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Country = (props) => {
    const { data } = props;
    const { name, flags } = data;
    return (
        <Col lg={6} md={4}>
            <Card>
                <Card.Title>{name.common}</Card.Title>
                <Card.Img src={flags.png} />
                <FontAwesomeIcon icon={faPlus} />
            </Card>
        </Col>
    );
};

export default Country;