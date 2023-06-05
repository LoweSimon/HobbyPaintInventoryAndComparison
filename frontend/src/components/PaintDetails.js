import { Button, Card } from 'react-bootstrap';
import { useAuthContext } from '../hooks/useAuthContext';

const PaintDetails = ({ paint }) => {

    const { user } = useAuthContext();

    return (
        <Card className='w-50 bg-info mb-4'>
            <Card.Body>
            <Card.Img>
                
            </Card.Img>
                <div className="paint-details">
                    <h4>{paint.title}</h4>
                    <p><strong>Price: </strong>{paint.price}</p>
                    <p><strong>Link: </strong><a href={paint.link} target="_blank" rel="noreferrer">{paint.link}</a></p>
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