import { Button, Card, Row, Col, Container } from 'react-bootstrap';
import { useAuthContext } from '../hooks/useAuthContext';

const PaintDetails = ({ paint }) => {

    const { user } = useAuthContext();

    return (
        <Container fluid>
            <Row lg={3} md={2} sm={1}>
                <Col>
                    <Card className='bg-info mx-auto m-2'>
                        <Card.Body>
                            <Card.Img variant='top' src={paint.paintImage} alt="Paint Image" height="50%" width="100%" />
                                <div className="paint-details">
                                    <Card.Title className='text-center pt-2'>{paint.paintTitle} - {paint.paintCompany}</Card.Title>
                                    <p><strong>Type: </strong>{paint.paintType}</p>
                                    <p><strong>Prices: </strong></p>
                                    <ul>
                                        <a href={paint.paintLink.elementLink} target="_blank" rel='noreferrer'><li>Element Games: {paint.paintPrice.elementPrice}</li></a>
                                        <a href={paint.paintLink.waylandLink} target="_blank" rel='noreferrer'><li>Wayland Games: {paint.paintPrice.waylandPrice}</li></a>
                                        <a href={paint.paintLink.hobbyworkshopPrice} target="_blank" rel='noreferrer'><li>Hobby Workshop: {paint.paintPrice.hobbyworkshopPrice}</li></a>
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
                </Col>
            </Row>
        </Container>        
    )
}

export default PaintDetails;