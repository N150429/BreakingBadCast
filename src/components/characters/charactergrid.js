import React from "react";
import CharacterItem from "./characteritem";
import Spinner from "../ui/spinner";
const Charactergrid = ({ items, isLoading }) => {
  return isLoading ? (
    <Spinner />
  ) : (
    <section className="cards">
      {items.map((item) => (
        <CharacterItem key={item.char_id} item={item}></CharacterItem>
      ))}
    </section>
  );
};

export default Charactergrid;
