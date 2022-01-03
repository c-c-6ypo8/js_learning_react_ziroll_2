import './App.css'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import {Cards } from './components/Cards'

function App() {
  return (
    <div className='app'>
      <header>
        <Navbar />
      </header>
      <main>
        <Hero />
        <Cards />
      </main>
    </div>
  )
}

export default App
