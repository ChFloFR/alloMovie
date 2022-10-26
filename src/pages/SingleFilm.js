import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const url =
  "https://api.themoviedb.org/3/movie/550?api_key=ab7b3a0007914779b57efa24bb03a284";

  const SingleFilm = ()=>{
    const [films, setFilms] = useState({});
    const { id } = useParams();
    
    async function getFilms() {
      // setLoading(true);
      try {
        const response = await fetch(`${url}`);
        const data = await response.json();
        if (data.films) {
          console.log(data);
          const {
            id,
            title: name,
            poster_path: image,
            overview: info,
            genre_ids: category,
            release_date: sortie,
          } = data.films[0];
          // const informations = [];
          const newFilm = {
            name,
            image,
            info,
            category,
            sortie,
          };
          setFilms(newFilm);
          // setLoading(false);
        } else {
          setFilms(null);
        }
      } catch (error) {
        // setLoading(false);
      }
    }
    
    useEffect(() => {
      getFilms();
      // eslint-disable-next-line
    }, []);

};

// const { name, image, category, info } = Film;
export default SingleFilm;