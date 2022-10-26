import React, { useState, useEffect } from "react";
// import axios from "axios";
import FilmList from "./pages/FilmList";
import SingleFilm from "./pages/SingleFilm";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./component/NavBar";
import "./App.css";

const url = `https://api.themoviedb.org/3/movie/popular?api_key=ab7b3a0007914779b57efa24bb03a284`;

function App() {
  const [movies, setMovies] = useState([

  ]);

  // Même travail que componentDidMount et componentDidUpdate
  useEffect(() => {
    // on lance la fonction pour aller chercher les datas
fetch(url)
    .then((res)=>res.json())
    .then(data=>{
      console.log(data);
      setMovies(data.results);
      // setTotalPages(data.total_pages);
      // console.log(totalPages);
    })
    // setPageCount(Math.ceil(moviesList.length / moviesPerPage));
  }, []);
  // console.log(moviesList);
    // console.log(mounted);


  // INPUT
  // const [inputData, setInputData] = useState();
  // e est l'évènement à l'input
  // const changeInput = (e) => {
  //   setInputData(e);
  // };
  return (
    <div className="App">
      <header className="container-header">
        <h1>heyyyyyyyyy</h1>
        <Router>
          <NavBar />
          {}
          <Routes>
            <Route index />
            <Route path="/" element={<FilmList />} />
            <Route path="/film/:id" element={<SingleFilm />} />
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;

//   <h1 className="titre-app">Hello depuis App : {/*monState*/}</h1>
//   <input
//     type="text"
//     value={inputData}
//     onInput={(e) => changeInput(e.target.value)}
//   />
//   <Fragment>
//     <ul>
//       {data.map((item) => (
//         <li key={item.id}>
//           <p>{item.title}</p>
//         </li>
//       ))}
//     </ul>
//   </Fragment>
/*
    <Item func={modifyState} />*/
