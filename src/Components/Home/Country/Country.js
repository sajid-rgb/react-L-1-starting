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
            </Card>
        </Col>
    );
};

export default Country;