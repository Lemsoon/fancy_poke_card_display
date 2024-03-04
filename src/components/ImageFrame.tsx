import "../scss/imageFrame.scss";

export const ImageFrame = ({ pokemonImage, pokemon }: any) => {
  return (
    <div className="image-frame">
      <img src={pokemonImage} alt={pokemon + " image"} className="pokemon-image" />
    </div>
  );
};
