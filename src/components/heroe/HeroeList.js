import React from "react";
import { getHoresByPublisher } from "../../helpers/getHoresByPublisher";
import HeroeCard from "./HeroeCard";

const HeroeList = ({ publisher = "DC Comics" }) => {
  const heroes = getHoresByPublisher(publisher);
  return (
    <div className="row rows-cols-1 row-cols-3 g-3-">
      {heroes.map((heroe) => (
        <HeroeCard key={heroe.id} {...heroe} />
      ))}
    </div>
  );
};

export default HeroeList;
