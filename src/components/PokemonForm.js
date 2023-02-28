import React, {useState} from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({onAddPokemon}) {

  function handleChange(e) {
    console.log(e.target.value)
    if (e.target.id === 'front' || e.target.id === 'back') {
      setFormdata({...formData, sprites: {...formData.sprites, [e.target.id]: e.target.value}})
    } else {
      setFormdata({...formData, [e.target.id]: e.target.value})
    }
  }


  function handleSubmit(e) {
    e.preventDefault()
    fetch('http://localhost:3001/pokemon', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
    .then(res => res.json())
    .then(data => onAddPokemon(data))
  }

  const [formData, setFormdata] = useState({
    name: '',
    hp: '',
    sprites: {
      front: '',
      back: ''
    }
  })

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={handleSubmit}
      >
        <Form.Group widths="equal">
          <Form.Input fluid id="name" onChange={handleChange} label="Name" value={formData.name} placeholder="Name" name="name" />
          <Form.Input fluid id="hp" onChange={handleChange} label="hp" value={formData.hp} placeholder="hp" name="hp" />
          <Form.Input
            fluid
            id="front"
            onChange={handleChange}
            label="Front Image URL"
            value={formData.sprites.front}
            placeholder="url"
            name="frontUrl"
          />
          <Form.Input
            fluid
            id="back"
            onChange={handleChange}
            label="Back Image URL"
            value={formData.sprites.back}
            placeholder="url"
            name="backUrl"
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
