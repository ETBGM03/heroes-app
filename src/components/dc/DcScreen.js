import React from "react";
import HeroeList from "../heroe/HeroeList";
import PropTypes from "prop-types";
const DcScreen = () => {
  return (
    <div>
      <h2>Dc's</h2>
      <hr />
      <HeroeList publisher="DC Comics" />
    </div>
  );
};
DcScreen.propsTypes = {
  publisher: PropTypes.string.isRequired,
};

export default DcScreen;
