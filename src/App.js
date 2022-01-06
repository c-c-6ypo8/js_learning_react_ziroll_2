import './App.css'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Card } from './components/Card'
import { data } from './Data'

export const App = () => (
  <div className='app'>
    <header>
      <Navbar />
    </header>
    <main>
      <Hero />
      <section className='cards-band'>
        {data.map((cardData) => (
          <Card {...cardData} key={cardData.id} />
        ))}
      </section>
      <div>&nbsp;</div>
    </main>
  </div>
)
