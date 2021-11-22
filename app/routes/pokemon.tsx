import { Link, Outlet, useLoaderData } from "remix";
import type { LoaderFunction, MetaFunction } from "remix";

interface Pokemon {
  name: string;
  url: string;
}

export let meta: MetaFunction = () => {
  return {title: 'Pokemon list'}
}

export let loader: LoaderFunction = () => {
  // you can point to whatever org you want, ofc
  return fetch(
    "https://pokeapi.co/api/v2/pokemon?limit=151"
  ).then(res => res.json()).then(res => res.results);
};

export default function Team() {
  let data = useLoaderData<Pokemon[]>();

  return (
    <div>
      <h2>Pokemon</h2>
      <div style={{display: 'flex', gap: '2rem'}}>
        <ul>
          {data.map(pokemon => (
            <li key={pokemon.name}>
              <Link to={`/pokemon/${pokemon.name}`}>{pokemon.name}</Link>
            </li>
          ))}
        </ul>
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
}
