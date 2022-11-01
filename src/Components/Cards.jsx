import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Placeholder from 'react-bootstrap/Placeholder';

function CardExample( {review} ) {
  return (
    <div className="d-inline-flex">
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={`${review.review_img_url}`} />
        <Card.Body>
          <Card.Title className="card_title">{review.title}</Card.Title>
          <Card.Text className="card_body"> {review.review_body}</Card.Text>
          <Card.Text>{`Reviewed by: ${review.owner}`}</Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>

      {/* <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Placeholder as={Card.Title} animation="glow">
            <Placeholder xs={6} />
          </Placeholder>
          <Placeholder as={Card.Text} animation="glow">
            <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
            <Placeholder xs={6} /> <Placeholder xs={8} />
          </Placeholder>
          <Placeholder.Button variant="primary" xs={6} />
        </Card.Body>
      </Card> */}
    </div>
  );
}

export default CardExample;