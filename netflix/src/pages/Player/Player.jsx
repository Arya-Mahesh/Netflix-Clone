import './Player.css'
import back_arrow_icon from '../../assets/arrow.png'
import { useEffect, useState } from 'react';
import {useNavigate, useParams} from 'react-router-dom';

const Player = () => {

  const {id} = useParams();
  const navigate = useNavigate();

  const [apiData,setApiData] = useState({
    name: "",
    key : "",
    published_at : "",
    type : ""
  })
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxODIzNDZlOTU4NWI3N2VhMTNjZjMwMmI2YzJmN2ZlMyIsIm5iZiI6MTczMTE3NDY1MS4wNSwic3ViIjoiNjcyZmEwZmI1YTY1YmI4MTkwZGQyNzQ5Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.RGqHGV-wLT7rpDXpibVRjfycjAYADR5D2hKv8_P4-PU'    }
  };
  
  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
    .then(res => res.json())
    .then(res => setApiData(res.results[0]))
    .catch(err => console.error(err));
  })


  return (
    <div className='player'>
      <img src={back_arrow_icon} alt="" onClick={()=>{navigate(-2)}} />
      <iframe width='90%' height='90%' src={`https://www.youtube.com/embed/${apiData.key}`} title='trailer'
       allowFullScreen></iframe>
       <div className="player-info">
        <p>{apiData.published_at.slice(0,10)}</p> 
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
       </div>
    </div>
  )
}

export default Player
