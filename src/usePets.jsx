import { useState, useEffect } from "react";

const usePets = (location, animal, breed) => {
  const [pets, setPets] = useState([]);

  async function fetchPets() {
    const BASE_URL = `http://pets-v2.dev-apis.com/pets`;
    const PETS_URL = `${BASE_URL}?animal=${animal}&location=${location}&breed=${breed}`;
    const res = await fetch(PETS_URL);
    const json = await res.json();

    setPets(json.pets);
  }

  useEffect(() => {
    fetchPets();
  }, []);

  return [pets, fetchPets];
};

export default usePets;
