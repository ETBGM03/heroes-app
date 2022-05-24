import { heroes } from "../data/heroes";

export const getHoresByPublisher = (publisher) => {
  const heroesByPublisher = ["DC Comics", "Marvel Comics"];
  if (!heroesByPublisher.includes(publisher)) {
    throw new Error(`No publisher found for ${publisher}`);
  }
  return heroes.filter((hero) => hero.publisher === publisher);
};
