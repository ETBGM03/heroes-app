import { heroes } from "../data/heroes";

export const getHeroeById = (id) => {
  if (!id) return alert("Heroe no enconrado");

  return heroes.find((heroe) => heroe.id === id);
};
