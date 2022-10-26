import React from "react";
import Films from "./Film";
// import { useGlobalContext } from "./context";

const FilmList = () => {
  // const { films, loading } = useGlobalContext();

  // if (loading) {
  //   return <Loading />;
  // }

  if (Films.length < 1) {
    return <h2 className="section-title">Pas de film correspondant trouvé</h2>;
  }

  return (
    <section className="section">
      <h2 className="sectionTitle">Liste des films</h2>
      <div className="films-center">
        {Films.map((item) => {
          console.log(item);
          return <Films key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
};

export default FilmList;
