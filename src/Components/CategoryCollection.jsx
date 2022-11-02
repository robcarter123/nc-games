import { Spinner } from "react-bootstrap";
import { useState, useEffect } from "react";
import * as api from "../api";
import CategoryCards from "./Categories";
import { useParams } from "react-router-dom";

const CategoryCollection = () => {
  const [allCategories, setAllCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { category } = useParams();

  useEffect(() => {
    api.getCategories().then(({ data }) => {
      setAllCategories(data);
      setIsLoading(false);
    });
  }, [category]);

  if (isLoading) return <Spinner animation="grow" />;

  return (
    <div className="categories">
      {allCategories.map((categories) => {
        return <CategoryCards categories={categories} />;
      })}
    </div>
  );
};

export default CategoryCollection;