import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ReviewCard( {review} ) {
  return (
    <div className="d-inline-flex">
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={`${review.review_img_url}`} />
        <Card.Body>
          <Card.Title className="card_title">{review.title}</Card.Title>
          <Card.Text className="card_body"> {review.review_body.substring(0, 150) + '...'}</Card.Text>
          <Card.Text>{`Reviewed by: ${review.owner}`}</Card.Text>
          <Button variant="primary">Read More</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ReviewCard;