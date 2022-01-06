import './AppAirbnb.css'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Card } from './components/Card'
import { data } from './DataAirbnb'

export const AppAirbnb = () => (
  <div className='app-airbnb'>
    <header>
      <Navbar />
    </header>
    <main className='air-main'>
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
