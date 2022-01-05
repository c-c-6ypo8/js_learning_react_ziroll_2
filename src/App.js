import './App.css'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Card } from './components/Card'

function App() {
  return (
    <div className='app'>
      <header>
        <Navbar />
      </header>
      <main>
        <Hero />
        <section className='cards-band'>
          <Card
            img='exp1.png'
            rating={5.0}
            reviewCount={6}
            country='USA'
            title='Life Lessons with Katie Zaferes'
            price={136}
            status='SOLD OUT'
          />
        </section>
      </main>
    </div>
  )
}

export default App
