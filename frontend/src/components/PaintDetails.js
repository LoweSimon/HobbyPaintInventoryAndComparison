import { Button, Card } from 'react-bootstrap';
import { useAuthContext } from '../hooks/useAuthContext';

const PaintDetails = ({ paint }) => {

    const { user } = useAuthContext();

    return (
        
                <Card className='bg-info m-4'>
                    <Card.Body>
                    <Card.Img variant='top' src={paint.paintImage} />
                        <div className="paint-details">
                            <h4 className='text-center'>{paint.paintTitle}</h4>
                            <p><strong>Type: </strong>{paint.paintType}</p>
                            <p><strong>Prices: </strong></p>
                            <ul>
                                <li>Element Games: {paint.paintPrice.elementPrice}</li>
                                <li>Wayland Games: {paint.paintPrice.waylandPrice}</li>
                                <li>Goblin Gaming: {paint.paintPrice.goblinPrice}</li>
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