import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState, useEffect } from 'react'
import * as api from "./api";
import Header from "./Components/Header";
import './App.css'
import ReviewCollection from "./Components/ReviewCollection"
import "bootstrap/dist/css/bootstrap.min.css";
import CategoryCollection from "./Components/CategoryCollection";



function App() {
    const [allCategories, setAllCategories] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
      api.getCategories().then(({ data: { categories } }) => {
        setAllCategories(categories);
        setIsLoading(false);
      });

    }, []);
  return (
  <BrowserRouter>
    <div className="App">
      <Header />
        <Routes>
          <Route path="/" element={<CategoryCollection />}/>
          <Route path="{/:categories}" element={<CategoryCollection allCategories={allCategories}/>}/>
        </Routes>
    </div>
  </BrowserRouter>
  );
}

export default App;
