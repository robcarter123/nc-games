import { Spinner } from "react-bootstrap";
import { useState, useEffect } from "react";
import * as api from "../api";
import CategoryCards from "./Categories";
import { useParams } from "react-router-dom";

const SingleReview = ({ allCategories }) => {
  const [review, setReview] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { review_id, category } = useParams();

  useEffect(() => {
    api.getReviewById(review_id).then(({ data: { review } }) => {
      setReview(review);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) return <Spinner animation="grow" />;

  return (
    <div className="single_review">
      <h2>{review.title}</h2>
      <p>{`Review by: ${review.owner} Date: ${review.created_at.substring(0, 10)}`}</p>
      <img className="review-img" src={`${review.review_img_url}`} alt={`${review.title}`}/>
      <p className="single-review-body">{review.review_body}</p>
    </div>
  );
};

export default SingleReview;