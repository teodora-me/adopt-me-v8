import { useState } from "react";
import PetList from "./PetList";
import useBreeds from "./useBreeds";
import usePets from "./usePets";

const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

const SearchParams = () => {
  const [location, setLocation] = useState("");
  const [animal, setAnimal] = useState("");
  const [breed, setBreed] = useState("");
  const [pets, fetchPets] = usePets(location, animal, breed);
  const [breeds] = useBreeds(animal);

  const onSubmit = (event) => {
    event.preventDefault();
    fetchPets();
  };

  const onAnimalChange = ({ target }) => {
    setAnimal(target.value);
    setBreed("");
  };

  // useEffect jivota na rendeneto - priema fn, koga iskame useEffect da vika callBack - a
  // pyrvonachalno renene , update, posledno rendene
  // useEffect -> 2ri param s masiv samo vednyj , sledim konkrenet state or property, koito sa se promenili i shte se trigger useEffect

  return (
    <div className="search-params">
      <form onSubmit={onSubmit}>
        <label htmlFor="location">
          Location
          <input
            id="location"
            value={location}
            placeholder="Location"
            onChange={({ target }) => setLocation(target.value)}
          />
        </label>
        <label htmlFor="animal">
          Animal
          <select id="animal" value={animal} onChange={onAnimalChange}>
            <option />
            {ANIMALS.map((animal) => (
              <option key={animal}>{animal}</option>
            ))}
          </select>
        </label>
        <label htmlFor="breed">
          Breed
          <select
            id="breed"
            disabled={breeds.length === 0}
            value={breed}
            onChange={({ target }) => setBreed(target.value)}
          >
            <option />
            {breeds.map((breed) => (
              <option key={breed}>{breed}</option>
            ))}
          </select>
        </label>
        <button type="submit">Search</button>
      </form>
      <PetList pets={pets} />
    </div>
  );
};

export default SearchParams;
