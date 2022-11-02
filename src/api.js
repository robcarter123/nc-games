import axios from "axios";

const api = axios.create({
    baseURL: "https://nc-backend-game.herokuapp.com/",
});

export const getReviews = () => {
    return api.get("api/reviews");
}

export const getCategories = () => {
    return api.get("api/categories");
}