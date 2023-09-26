import { heroes } from "../data/heroes";

export const getHeroesById = () => {
  return heroes.find((heroe) => heroe.id === id);
};
