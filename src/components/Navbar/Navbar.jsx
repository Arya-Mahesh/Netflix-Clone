import './Navbar.css'
import logo from '../../assets/streamflix.png'
import search from '../../assets/search.png'
import bell from '../../assets/bell.png'
import profile from '../../assets/Netflix-avatar.ico'
import caret from '../../assets/icons8-sort-down-30.png'
import { useRef } from 'react'
import { useEffect,useState } from 'react'
import { logout } from '../../firebase'

const Navbar = () => {

  const navRef = useRef();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', ()=> {
      if(window.scrollY >=80 ){
        navRef.current.classList.add('nav-dark')   
      }else{
        navRef.current.classList.remove('nav-dark')
      }
    })
  })
  return (
    <div ref={navRef} className='navbar'>
     <div className="navbar-left">
        <img className="logo" src={logo} alt=''></img>
        <ul className={`nav-items ${dropdownOpen ? 'open' : ''}`}>
          <li>Home</li>
          <li>TV Show</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse by Languages</li>
        </ul>
      </div>
     <div className="navbar-right">
      <img src={search} alt="" className='icons'></img>
      <p>Children</p>
      <img src={bell} alt="" className='icons'></img>
      <div className="navbar-profile" onClick={() => setDropdownOpen(!dropdownOpen)}>
        <img src={profile} alt="" className='profile'></img>
        <img src={caret} alt="" className='caret'></img>
        {dropdownOpen && (
        <div className="dropdown">
          <ul>
              <li>Home</li>
              <li>TV Show</li>
              <li>Movies</li>
              <li>New & Popular</li>
              <li>My List</li>
              <li>Browse by Languages</li>
             
          <p  onClick={()=>{logout()}}>Sign Out</p>
          </ul>
        </div>
        )}
      </div>
     </div>
    </div>
  )
}

export default Navbar
