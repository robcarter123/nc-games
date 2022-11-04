import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function ReviewCard( {review} ) {
  return (
    <div className="d-inline-flex">
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={`${review.review_img_url}`} />
        <Card.Body>
          <Card.Title className="card_title">{review.title}</Card.Title>
          <Card.Text className="card_body"> {review.review_body.substring(0, 150) + '...'}</Card.Text>
          <Card.Text>{`Reviewed by: ${review.owner}`}</Card.Text>
          <Card.Text>{`Category: ${review.category}`}</Card.Text>
          <Card.Text>{`Review_id: ${review.review_id}`}</Card.Text>
          <Link to={`/${review.category}/${review.review_id}`}>
            <Button variant="primary">Read More</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ReviewCard;