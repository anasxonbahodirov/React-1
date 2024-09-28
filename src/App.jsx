import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
          <div className="App">
      <header className="navbar">
       <div>
        <img src="./assets/images/Rectangle 6.png" alt="" />
       <div className="logo">
          <img src="./assets/images/Group 26.png" alt="" />
        </div>
        <nav className="nav-links">
          <a href="#about">About</a>
          <a href="#news">News</a>
          <a href="#music">Music</a>
          <a href="#media">Media</a>
          <a href="#tours">Tours</a>
          <a href="#contacts">Contacts</a>
        </nav>
       </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>New Single</h1>
          <h2>War For Love</h2>
          <div className="track-info">
            <span>00:22</span>
            <div className="progress-bar">
              <div className="progress"></div>
            </div>
            <span>02:55</span>
          </div>
        </div>
      </section>

      <section className="cards">
        <div className="card">
          <img src="./assets/images/Rectangle 7.png" alt="" />
          <p>Working on my upcoming full-length album that's releasing later this year.</p>
        </div>
        <div className="card">
          <img src="./assets/images/Rectangle 7.png" alt="" />
          <p>Halloween vibes. Listen to my new track!</p>
        </div>
        <div className="card">
          <img src="./assets/images/Rectangle 7.png" alt="" />
          <p>War For Love is OUT NOW! Stream it here!</p>
        </div>
      </section>


     
    </div>
    </>
  )
}

export default App
