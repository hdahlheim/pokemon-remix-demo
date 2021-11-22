import { useLoaderData } from "remix";
import type { LoaderFunction } from "remix";

interface Pokemon {
  id: number;
  name: string;
  sprites: {
    front_default: string
  }
}

export let loader: LoaderFunction = ({ params }) => {
  return fetch(
    `https://pokeapi.co/api/v2/pokemon/${params.pokemon}`
  );
};

export default function Pokemon() {
  let pokemon = useLoaderData<Pokemon>();
  return (
    <div>
      <h3 style={{textTransform: 'capitalize'}}>{pokemon.name}</h3>
      <img
        alt="pokemon sprit"
        src={pokemon.sprites.front_default}
        height="100"
      />
    </div>
  );
}
