
import React from 'react';
import { Card, Button } from 'react-bootstrap';

const News = (props) => {
    const article = props.article
    const { title, description, urlToImage } = article
    console.log(article);

    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={urlToImage} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{description}</Card.Text>
                    <Button variant="success">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default News;