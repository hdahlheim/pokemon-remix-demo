import type { MetaFunction, LinksFunction } from "remix";
import { Link } from "react-router-dom";

import stylesUrl from "../styles/index.css";

export let meta: MetaFunction = () => {
  return {
    title: "Remix Starter",
    description: "Welcome to remix!"
  };
};

export let links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: stylesUrl }];
};

export default function Index() {

  return (
    <div style={{ textAlign: "center", padding: 20 }}>
      <h2>Welcome to Remix Pokemon demo!</h2>
      <p>
        Why a pokemon demo? Do I really have to awnser this question 🙄?
      </p>
      <Link to="/pokemon">Pokemon</Link>
    </div>
  );
}
