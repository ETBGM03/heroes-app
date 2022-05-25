import React, { useMemo } from "react";
import { getHoresByPublisher } from "../../helpers/getHoresByPublisher";
import HeroeCard from "./HeroeCard";
import "animate.css";
const HeroeList = ({ publisher = "DC Comics" }) => {
  const heroes = useMemo(() => getHoresByPublisher(publisher), [publisher]);
  return (
    <div className="row rows-cols-1 row-cols-3 g-3 animate__animated animate__fadeInUp">
      {heroes.map((heroe) => (
        <HeroeCard key={heroe.id} {...heroe} />
      ))}
    </div>
  );
};

export default HeroeList;
