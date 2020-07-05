import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/ui/header";
import Character from "./components/characters/charactergrid";
import Search from "./components/ui/search";

import "./App.css";

const App = () => {
  const [items, setItems] = useState();
  const [isLoading, setLoading] = useState(true);
  const [query, setQuery] = useState(" ");

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(
        `https://www.breakingbadapi.com/api/characters?name=${query}`
      );
      console.log(result.data);
      setItems(result.data);
      setLoading(false);
    };
    fetchItems();
  }, [query]);
  return (
    <div className="container">
      <Header />
      <Search getQuery={(q) => setQuery(q)} />
      <Character isLoading={isLoading} items={items} />
    </div>
  );
};

export default App;
