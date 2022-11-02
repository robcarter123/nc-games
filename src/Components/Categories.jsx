import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function CategoryCards({categories}) {
    const upper = categories.slug.toUpperCase();
  return (
    <Card className='catCard'>
      <Card.Body >
        <Card.Title className="catHeader">{upper}</Card.Title>
        <Card.Text className="catBody">{categories.description}</Card.Text>
        <Link to={`/${categories.slug}`}>
          <Button 
                variant="primary">Read Reviews
          </Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

// className='d-inline-flex'

export default CategoryCards;