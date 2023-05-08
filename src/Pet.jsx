const Pet = ({ id, name, animal, breed, images, city, state }) => {
  const image = images[0] || "http://pets-images.dev-apis.com/pets/none.jpg";

  return (
    <a href={`/details/${id}`} className="pet">
      <div className="image-container">
        <img src={image} alt={name} />
      </div>
      <div className="info">
        <h1>{name}</h1>
        <h2>
          {animal} - {breed} - {city}, {state}
        </h2>
      </div>
    </a>
  );
};

export default Pet;
