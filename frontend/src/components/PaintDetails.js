import { Button, Card, Col, Row } from 'react-bootstrap';
import { useAuthContext } from '../hooks/useAuthContext';

const PaintDetails = ({ paint }) => {

    const { user } = useAuthContext();

    return (
        <Row xs={1} md={3} lg={4} className="g-4">
            {Array.from({ length: 4 }).map((_, idx) => (
            <Col key={idx}>
                <Card className='bg-info m-4'>
                    <Card.Body>
                    <Card.Img variant='top' src={paint.paintImage} />
                        <div className="paint-details">
                            <h4 className='text-center'>{paint.paintTitle}</h4>
                            <p><strong>Price: </strong>{paint.paintPrice}</p>
                            <p><strong>Link: </strong><a href={paint.paintLink} target="_blank" rel="noreferrer">{paint.paintLink}</a></p>
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
            ))}
        </Row>
    )
}

export default PaintDetails;