

npm create vite@latest netflix
react
javascript
npm install
npm run dev
---------------------------------------
delete - vite.svg,app.css,clear app and do rafce
save logos and photos in assets.
netflixicon.ico -> public
index.html =>  <link rel="icon" type="image/svg+xml" href="netflixicon.ico" />
logo will change in title
----------------------------------------
Edit index.css
create components folder
create pages folder
----------------------------------------
In Page folder create folder:-
Home -> +jsx,css
Login -> +jsx,css
Player ->+ jsx,css
----------------------------------------
In components Create folder:-
Navbar -> +jsx,css
TitleCards-> +jsx,css
Footer-> +jsx,css
----------------------------------------
Import Home in App 
Import Navbar in Home
----------------------------------------
Add 2 div classes for navbar
->nabar-left
add logo 
navbar-right
---------------------------------------
Edit Home
add banner
add title
-----------------------------------
https://images.squarespace-cdn.com/content/v1/59232e19579fb3fa44a693c2/1589212826160-UM9PEPGOS3OJPR0FJ81X/ke17ZwdGBToddI8pDm48kHZUaJeKzodyg_sXWBMxNTdZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpxCBUU7B-_SAG1kGvCwYgmUjQXvn8_OJjtz3K1llMQBa1MPsuSXPSY3X-tgg78M7lI/SKOyqL1qFLIhbK6ho2lB-696x975.jpg?format=1500w
------------------------------------
Tools

https://icons8.com/icons/search-by-image
https://redketchup.io/icon-converter

-----------------------------------
After making home page we need to add router :=

npm install react-router-dom

in main.jsx->
import {BrowserRouter} from 'react-router-dom'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </StrictMode>,
)

In App.jsx
import { Routes,Route } from 'react-router-dom'
import Login from './pages/Login/Login'

const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/login' element={<Login />}/>
      </Routes>
    
    </div>
    )}
------------------------------------
State for SignIn and SignUp
-----------------------------------
API = 182346e9585b77ea13cf302b6c2f7fe3
-----------------------------------




---------------------------------
Add Firebase

=======
# Netflix-Clone
A React-based cryptocurrency marketplace that provides real-time information on cryptocurrencies. The platform is designed to be visually engaging and user-friendly, allowing users to explore detailed data about various cryptocurrencies.

