import { heroes } from "../data/heroes";

export const getHeroeByName = (name = "") => {
  if (!name) return alert("Heroe no enconrado");

  return heroes.filter((heroe) =>
    heroe.superhero.toLowerCase().includes(name.toLowerCase())
  );
};
