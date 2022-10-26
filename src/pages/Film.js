import React from "react";
import { Link } from "react-router-dom";

const Films = ({ name, image, info, id, actor, type }) => {
  return (
    <article className="film-section">
      <Link to="/" className="btn btn-primary">
        Retour accueil
      </Link>
      <div className="img-container">
        <img src={image} alt={name} />
      </div>
      <div className="film-footer">
        <h2>{name}</h2>
        <h4>{type}</h4>
        <p>{info}</p>
        <Link to={`/film/${id}`} className="btn btn-primary btn-details">
          details
        </Link>
      </div>
    </article>
  );
};

export default Films;