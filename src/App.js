import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";
import Index from "./Index";
import Film from "./pages/Film";
import FilmList from "./pages/FilmList";
import SingleFilm from "./pages/SingleFilm";

function App() {
  const [data, setData] = useState([]);

  // Même travail que componentDidMount et componentDidUpdate
  useEffect(() => {
    // on lance la fonction pour aller chercher les datas
    const fetchData = async () => {
      const result = await axios(
        "https://api.themoviedb.org/3/movie/popular?api_key{ab7b3a0007914779b57efa24bb03a284}"
      );
      // on range les données ici
      // setData(result.data);
      console.log(result);
    };
    fetchData();
    // console.log(mounted);
  }, []);

  // INPUT
  const [inputData, setInputData] = useState();
  // e est l'évènement à l'input
  const changeInput = (e) => {
    setInputData(e);
  };
  return (
    <div className="App">
      <h1 className="titre-app">Hello depuis App : {/*monState*/}</h1>
      <input
        type="text"
        value={inputData}
        onInput={(e) => changeInput(e.target.value)}
      />
      <Fragment>
        <ul>
          {data.map((item) => (
            <li key={item.id}>
              <p>{item.title}</p>
            </li>
          ))}
        </ul>
      </Fragment>
      {/*
      <Item func={modifyState} />
          */}
    </div>
  );
}

export default App;
