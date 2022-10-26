import React from "react";
import FilmList from "./FilmList";
import SearchForm from "../components/SearchForms";

const Home = () => {
  return (
    <main>
    <h1>gyyyy</h1>
      <div className="form">
        <SearchForm />
      </div>
      <div className="item">
        <FilmList />
      </div>
    </main>
  );
};

export default Home;
