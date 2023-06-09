import { useEffect, useState } from "react"
import "./Episodes.css"

function Episodes() {
  const[episodes, setEpisodes] = useState([])
  const[selected, setSelected] = useState([])
  

  useEffect(() =>{
    fetch(`https://api.sampleapis.com/avatar/episodes`)
    .then(response => response.json())
    .then(episodes => {
      setEpisodes(episodes)
      // console.log(" *** EPISODES ***")
      // console.log(episodes)
    })
    .catch(error => {
      console.error(error)
    })
  },[])

  let handleOnChange =(event)=>{
    let title = event.target.value
    let selectedEpisode = episodes.find(episode => {
      console.log("*** EPISODE ***")
      console.log(episode)
      return episode.Title === title
    })
    setSelected(selectedEpisode)
  }

  return (
    <div className="episodes">
      <h3>Avatar Episodes</h3>
      <select onChange={handleOnChange}>
          {episodes.map((episode) => {
              return (
                  <option key={episode.id}>{episode.Title}</option>
              )
          })}
      </select>
        {selected ? (
          <div className="episode-info">
              <h2><span className="color">Title: </span>{selected.Title}</h2>
              <h4><span className="color">Director:</span> {selected.DirectedBy}</h4>
              <h4><span className="color">Animator:</span> {selected.AnimatedBy}</h4>
              <h4><span className="color">Originally Aired:</span> {selected.OriginalAirDate
}</h4>
          </div>
        ) : null}
    </div>
  );
}


export default Episodes;