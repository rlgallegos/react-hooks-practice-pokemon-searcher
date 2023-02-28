import React, {useState, useEffect} from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
 const [pokedex, setPokedex] = useState([])
 const [searchInput, setSearchInput] = useState('')

 useEffect(() => {
  fetch('http://localhost:3001/pokemon')
  .then(res => res.json())
  .then(data => setPokedex(data))
 }, [])

 function handleFilter(e) {
  setSearchInput(e.target.value)
 }

 function handleAddPokemon(newPokemonObj) {
  setPokedex([...pokedex, newPokemonObj])
 }

 const filteredPokedex = pokedex.filter(pokemon => !searchInput || pokemon.name.includes(searchInput) ? true : false)

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm onAddPokemon={handleAddPokemon} />
      <br />
      <Search searchInput={searchInput} onFilter={handleFilter} />
      <br />
      <PokemonCollection pokedex={filteredPokedex} />
    </Container>
  );
}

export default PokemonPage;
