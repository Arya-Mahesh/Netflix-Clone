import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import banner from '../../assets/cyndrella.jpg'
import img from '../../assets/cinderella.png'
import play from '../../assets/play_3917707.png'
import info from '../../assets/info_3916714.png'
import TitleCards from '../../components/TitleCards/TitleCards'
import Footer from '../../components/Footer/Footer'

const Home = () => {
  return (
    <div className='home'>
      <Navbar />
      <div className="banner" >
        <img src={banner} alt="" className='banner-img'/>
        <div className="hero-caption">
          <img src={img} alt="" className='caption-img'/>
          <p>Cinderella is a modern movie musical with a bold take on the classic fairytale. Our ambitious heroine (Camila Cabello) has big dreams and with the help of her Fab Godmother, she perseveres to make them come true.</p>
          <div className="hero-btns">
            <button className='btn'><img src={play} alt=" "/>Play</button>
            <button className='btn dark-btn'><img src={info} alt="" />More Info</button>
          </div>
          <TitleCards/>
        </div>
      </div>
      <div className="more-cards">
      <TitleCards title={"Blockbuster Movies"} category={"top_rated"}/>
      <TitleCards title={"Only on Netflix"} category={"popular"}/>
      <TitleCards title={"Upcoming"} category={"upcoming"}/>
      <TitleCards title={"Top Pics For You"} category={"now_playing"}/>
      </div>
      <Footer/>
    </div>
  
  )
}

export default Home
