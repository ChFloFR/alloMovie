import React from "react";
import Films from "./Films";
import Loading from "../components/Loading";
import { useGlobalContext } from "./context";

const FilmList = () => {
  const { films, loading } = useGlobalContext();

  if (loading) {
    return <Loading />;
  }

  if (films.length < 1) {
    return <h2 className="section-title">Pas de film correspondant trouvé</h2>;
  }

  return (
    <section className="section">
      <h2 className="sectionTitle">Liste des films</h2>
      <div className="films-center">
        {films.map((item) => {
          console.log(item);
          return <Films key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
};

export default FilmList;
