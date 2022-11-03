import { Spinner } from "react-bootstrap";
import { useState, useEffect } from "react";
import * as api from "../api";
import ReviewCard from "./ReviewCards";
import { useParams } from "react-router-dom";

const ReviewCollection = () => {
  const [allReviews, setAllReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { category } = useParams()

  useEffect(() => {
    api.getReviewsByCategory(category).then(({ data }) => {
      setAllReviews(data);
      setIsLoading(false);
    });
  }, [category]);

  if (isLoading) return <Spinner animation="grow" />;

  return (
    <div className="reviews">
      {allReviews.map((review) => {
        return <ReviewCard review={review} />;
      })}
    </div>
  );
};

export default ReviewCollection;