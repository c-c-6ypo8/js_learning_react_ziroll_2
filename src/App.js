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
        {data.map(
          ({ id, img, rating, status, price, title, country, reviewCount }) => (
            <Card
              img={img}
              rating={rating}
              reviewCount={reviewCount}
              country={country}
              title={title}
              price={price}
              status={status}
              key={id}
            />
          ),
        )}
      </section>
    </main>
  </div>
)
