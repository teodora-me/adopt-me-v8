import { useState, useEffect } from "react";

const localCache = {};

const useBreeds = (animal) => {
  const [breeds, setBreeds] = useState([]);
  const [status, setStatus] = useState("unloaded");

  const requestBreeds = async () => {
    setBreeds([]);
    setStatus("loading");

    const ANIMAL_URL = `http://pets-v2.dev-apis.com/breeds?animal=${animal}`;
    const res = await fetch(ANIMAL_URL);
    const json = await res.json();
    localCache[animal] = json.breeds || [];

    setBreeds(localCache[animal]);
    setStatus("loaded");
  };

  useEffect(() => {
    if (!animal) {
      setBreeds([]);
    } else if (localCache[animal]) {
      setBreeds(localCache[animal]);
    } else {
      requestBreeds();
    }
  }, [animal]);

  return [breeds, status];
};

export default useBreeds;
