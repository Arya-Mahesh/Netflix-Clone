import './Footer.css'
import youtube from '../../assets/youtube.png'
import twitter from '../../assets/twitter.png'
import instagram from '../../assets/instagram.png'
import facebook from '../../assets/facebook.png'


const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-icons">
        <img src={youtube} alt="" />
        <img src={twitter} alt="" />
        <img src={facebook} alt="" />
        <img src={instagram} alt="" />
      </div>
      <ul>
        <li>Audio Description</li>
        <li>Help Centre</li>
        <li>Gift Cards</li>
        <li>Media Centre</li>
        <li>Invester Relations</li>
        <li>Terms of Use</li>
        <li>Privacy</li>
        <li>Contact Us </li>
      </ul>
      <p className='copyright-text'>&#169; 1997-2024 Netflix, Inc.</p>
    </div>
  )
}

export default Footer
