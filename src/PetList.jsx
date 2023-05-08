import Pet from "./Pet";

const PetList = ({ pets }) => {
  const petList = pets.map(({ id, name, animal, breed, images, city, state }) => (
    <Pet key={id} id={id} name={name} animal={animal} breed={breed} images={images} city={city} state={state} />
  ));
  const noPetsFound = <h1>No pets found</h1>;

  return <div className="search">{pets.length > 0 ? petList : noPetsFound}</div>;
};

export default PetList;
