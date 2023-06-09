import { useEffect, useState } from "react"
import "./Characters.css"

function Characters() {
  const[characters, setCharacters] = useState([])
  const[selectedChar, setSelectedChar] = useState([])
  

  useEffect(() =>{
    fetch(`https://api.sampleapis.com/avatar/characters`)
    .then(response => response.json())
    .then(characters => {
      setCharacters(characters)
      console.log(" *** CHARACTERS 1: ***")
      console.log(characters)
    })
    .catch(error => {
      console.error(error)
    })
  },[])
  
  let handleChrChange =(event)=>{
    let charName = event.target.value
    let selectedCharacter = characters.find(character => {
      console.log(" *** CHARACTER 2: ***")
      console.log(character)
      return character.name === charName
    })
    setSelectedChar(selectedCharacter)
  }

  return (
    <div>
      <h3>Avatar Characters</h3>
      <select onChange={handleChrChange}>
          {characters.map((character) => {
              return (
                  <option key={character.id}>{character.name}</option>
              )
          })}
      </select>
        {selectedChar ? (
          <div className="character-info">
              <img src={selectedChar.image} alt="Character image"/>
              <h3>Name: {selectedChar.name}</h3>
              {/* <h4>Bio: {selectedChar.bio.nationality}</h4> */}
          </div>
        ) : null}
    </div>
  );
}


export default Characters;