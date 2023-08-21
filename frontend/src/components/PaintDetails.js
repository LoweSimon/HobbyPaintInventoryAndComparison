import { Button, Card } from 'react-bootstrap';
import { useAuthContext } from '../hooks/useAuthContext';

const PaintDetails = ({ paint }) => {

    const { user } = useAuthContext();

    return (
            
                <Card className='bg-info m-4 w-25'>
                    <Card.Body>
                    <Card.Img variant='top' src={paint.paintImage} alt="Image showing the paint" />
                        <div className="paint-details">
                            <Card.Title className='text-center pt-2'>{paint.paintTitle} - {paint.paintCompany}</Card.Title>
                            <p><strong>Type: </strong>{paint.paintType}</p>
                            <p><strong>Prices: </strong></p>
                            <ul>
                                <a href={paint.paintLink.elementLink}><li>Element Games: {paint.paintPrice.elementPrice}</li></a>
                                <a href={paint.paintLink.waylandLink}><li>Wayland Games: {paint.paintPrice.waylandPrice}</li></a>
                                <a href={paint.paintLink.hobbyworkshopPrice}><li>Hobby Workshop: {paint.paintPrice.hobbyworkshopPrice}</li></a>
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
    )
}

export default PaintDetails;