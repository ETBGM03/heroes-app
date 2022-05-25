import React from "react";
import { Link } from "react-router-dom";
import "animate.css";
const HeroeCard = ({
  id,
  superhero,
  publisher,
  alter_ego,
  first_appearance,
  characters,
}) => {
  return (
    <div className="col animate__animated animate__fadeIn">
      <div className="card">
        <div className="row no-gutters">
          <div className="col-4">
            <img
              src={require(`../../assets/heroes/${id}.jpg`)}
              className="card-img "
              alt={superhero}
            />
          </div>
          <div className="col-8">
            <div className="card-body">
              <h4 className="card-title">{superhero}</h4>
              <p className="card-text">{alter_ego}</p>
              {alter_ego !== characters && (
                <p className="text-muted">{characters}</p>
              )}
              <p className="card-text">{first_appearance}</p>
              <Link to={`/heroe/${id}`} className="btn btn-primary">
                Más...
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroeCard;
