import { Button, Card, Row, Col, Container} from 'react-bootstrap';
import { useAuthContext } from '../hooks/useAuthContext';
import { usePaintsContext } from '../hooks/usePaintContext.js';

const PaintDetails = ({ paint }) => {

    const { user } = useAuthContext();
    const { paints } = usePaintsContext();

    


    return (

        <Row lg={4}>
            {paints &&
                paints.map((product) => {
                const { id, paintTitle, paintType, paintImage, paintCompany, elementLink, waylandLink, hobbyworkshopLink, elementPrice, waylandPrice, hobbyworkshopPrice } = product;
                return (
                    <Container>
                    <Col className="d-flex">
                        <Card className="flex-fill bg-info mx-auto m-2 flex-fill" key={id}>
                            <Card.Body>
                                <Card.Img variant='top' src={paintImage} alt="Paint Image" height="50%" width="100%" />
                                    <div className="paint-details">
                                        <Card.Title className='text-center pt-2'>{paintTitle} - {paintCompany}</Card.Title>
                                        <p><strong>Type: </strong>{paintType}</p>
                                        <p><strong>Prices: </strong></p>
                                        <ul>
                                            <a href={elementLink} target="_blank" rel='noreferrer'><li>Element Games: {elementPrice}</li></a>
                                            <a href={waylandLink} target="_blank" rel='noreferrer'><li>Wayland Games: {waylandPrice}</li></a>
                                            <a href={hobbyworkshopLink} target="_blank" rel='noreferrer'><li>Hobby Workshop: {hobbyworkshopPrice}</li></a>
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
                    </Container>
                );
                })}
        </Row> 
    )
}


export default PaintDetails;