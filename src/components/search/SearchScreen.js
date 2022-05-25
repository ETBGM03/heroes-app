import React, { useMemo } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import queryString from "query-string";
import { getHeroeByName } from "../../helpers/getHeroeByName";
import { useForm } from "../../hooks/useForm";
import HeroeCard from "../heroe/HeroeCard";
const SearchScreen = () => {
  const navigate = useNavigate();
  const { search } = useLocation();
  const { q = "" } = queryString.parse(search);
  const [searchText, handleInputChange] = useForm({
    searchHeroe: q,
  });
  const { searchHeroe } = searchText;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!searchHeroe.trim()) return alert("Please enter a heroe name");
    navigate(`?q=${searchHeroe}`);
  };

  const heroesFilter = useMemo(() => getHeroeByName(q), [q]);

  return (
    <>
      <h1>Search Screen</h1>
      <div className="row">
        <div className="col-5">
          <hr />
          <form onSubmit={handleSubmit} className="mb-5">
            <input
              autoComplete="off"
              className="form-control mb-3"
              name="searchHeroe"
              onChange={handleInputChange}
              placeholder="Search a Heroe"
              type="text"
              value={searchHeroe}
            />
            <button className="btn btn-outline-primary mt-2">Search</button>
          </form>
        </div>
        <div className="col-7">
          <h3>Results</h3>
          <hr />
          {heroesFilter.map((heroe) => (
            <HeroeCard key={heroe.id} {...heroe} />
          ))}
        </div>
      </div>
    </>
  );
};

export default SearchScreen;
