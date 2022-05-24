import React from "react";
import PropTypes from "prop-types";
import HeroeList from "../heroe/HeroeList";

const MarvelScreen = () => {
  return (
    <div>
      <h2>Marvel</h2>
      <hr />
      <HeroeList publisher="Marvel Comics" />
    </div>
  );
};
MarvelScreen.propsTypes = {
  publisher: PropTypes.string.isRequired,
};
export default MarvelScreen;
