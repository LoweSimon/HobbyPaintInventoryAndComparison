import { Button, Card, Row, Col, Container} from 'react-bootstrap';
import { useAuthContext } from '../hooks/useAuthContext';
import { usePaintsContext } from '../hooks/usePaintContext.js';
import { CardGroup } from 'react-bootstrap';

export const PaintDetails = () => {

    const { user } = useAuthContext();
    const { paints } = usePaintsContext();

    


    return (

        <Row lg={4} md={2}>
            {paints &&
                paints.map((paint) => {
                const { id, paintTitle, paintType, paintImage, paintCompany } = paint;
                return (
                    <Container>
                        <Col>
                            <CardGroup>
                                <Card className="flex-fill bg-info mx-auto m-2 shadow" key={id}>
                                    <Card.Body className='h-100'>
                                    <Card.Img variant='top' height='200px' src={paintImage} alt="Paint Image" />
                                        <div className="paint-details">
                                            <Card.Title className='text-center pt-2'><strong>{paintTitle} - {paintCompany}</strong></Card.Title>
                                            <p><strong>Type: </strong>{paintType}</p>
                                            <p><strong>Prices: </strong></p>
                                            <ul>
                                                <li><a href={paint.paintLink.elementLink} target="_blank" rel='noreferrer'>Element Games: {paint.paintPrice.elementPrice}</a></li>
                                                <li><a href={paint.paintLink.waylandLink} target="_blank" rel='noreferrer'>Wayland Games: <em>Coming soon</em>{paint.paintPrice.waylandPrice}</a></li>
                                                <li><a href={paint.paintLink.hobbyworkshopLink} target="_blank" rel='noreferrer'>Hobby Workshop: {paint.paintPrice.hobbyworkshopPrice}</a></li>
                                            </ul>
                                        </div>
                                            {user && (
                                            <div className="buttons">
                                                                
                                                <Button variant='primary'>Add to inventory</Button>
                                                <Button variant='primary'>Add to wishlist</Button>
                                                                    
                                                </div>
                                                    )}
                                    </Card.Body>
                                </Card>
                            </CardGroup>
                        </Col>
                    </Container>
                );
                })}
        </Row> 
    )
}