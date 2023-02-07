import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Content from "./components/Content";
import axios from "axios";

function App() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [cart, setCart] = useState([]);

  const fetchData = async () => {
    const response = await axios.get(
      "https://site--deliveroo-backend--22v2k5v8dwyb.code.run/"
    );
    setData(response.data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return isLoading ? (
    <span>En cours de chargement... </span>
  ) : (
    <div className="App">
      <Header data={data} isLoading={isLoading} />
      <Content categories={data.categories} cart={cart} setCart={setCart} />
    </div>
  );
}

export default App;
