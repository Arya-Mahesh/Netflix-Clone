import { Link } from 'react-router-dom';
import './TitleCards.css'
// import card1 from '../../assets/cards/card14.jpg';
import { useEffect, useState } from 'react';


const TitleCards = ({title,category}) => {
 
  const [apiData,setApiData] = useState([])

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxODIzNDZlOTU4NWI3N2VhMTNjZjMwMmI2YzJmN2ZlMyIsIm5iZiI6MTczMTE3NTAxOS4wMTI4MTM2LCJzdWIiOiI2NzJmYTBmYjVhNjViYjgxOTBkZDI3NDkiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.CAU-vskJkqGbAOLQ-KWPEee30Xi-n5-CZTwx_uamx54'
    }
  };

    useEffect(() => {
      fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
      .then(res => res.json())
      .then(res => setApiData(res.results))
      .catch(err => console.error(err));
    })
  return (
    <div className='titleCards'>
      <h2>{title?title:"Popular on Netflix"}</h2>
      <div className="card-list">
      {apiData.map((card,index)=> {
        return <Link  to={`/player/${card.id}`} className='card' key={index}>
              <img src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path}/>
              <p>{card.original_title}</p>
              </Link>
      })}


      {/* <img className="poster" src={card1}/>
      <img className="poster" src={card1}/>
      <img className="poster" src={card1}/>
      <img className="poster" src={card1}/>
      <img className="poster" src={card1}/>
      <img className="poster" src={card1}/> */}
      </div>
    </div>
  )
}

export default TitleCards
