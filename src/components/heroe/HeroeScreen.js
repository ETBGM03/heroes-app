import React, { useMemo } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getHeroeById } from "../../helpers/getHeroeById";
import "animate.css";
const HeroeScreen = () => {
  const { id_heroe } = useParams();
  const navigate = useNavigate();

  const heroe = useMemo(() => {
    return getHeroeById(id_heroe);
  }, [id_heroe]);

  const handleGoBack = () => {
    navigate(-1);
  };

  if (!heroe) return <Navigate to="/" />;

  return (
    <div className="row mt-5">
      <div className="col-4">
        <img
          src={require("../../assets/heroes/" + heroe.id + ".jpg")}
          alt={heroe.nombre}
          className="img-thumbnail animate__animated animate__fadeInLeft"
        />
      </div>
      <div className="col-8">
        <h3>{heroe.name}</h3>
        <ol className="list-grop list-group">
          <li className="list-group-item">
            <b>Alter Ego: </b> {heroe.alter_ego}
            <b>Publisher: </b> {heroe.publisher}
            <b>First Appareance: </b> {heroe.first_appearance}
          </li>
        </ol>
        <h4 className="mt-4">Characters</h4>
        <p>{heroe.characters}</p>
        <button className="btn btn-outline-info" onClick={handleGoBack}>
          Regresar
        </button>
      </div>
    </div>
  );
};

export default HeroeScreen;
