import { Spinner } from "react-bootstrap";
import { useState, useEffect } from "react";
import * as api from "../api";
import ReviewCard from "./ReviewCards";

const ReviewCollection = () => {
  const [allReviews, setAllReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    api.getReviews().then(({ data }) => {
      setAllReviews(data);
      setIsLoading(false);
    });
  }, []);

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