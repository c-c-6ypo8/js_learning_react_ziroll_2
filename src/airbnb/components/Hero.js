import './Hero.css'
import pictureGrid from '../assets/picture-grid.png'

export const Hero = () => (
  <section className='hero'>
    <img
      className='hero--picture-grid'
      src={pictureGrid}
      alt='Experiences Grid'
    />
    <article>
      <h1 className='hero--header'>Online Experiences</h1>
      <p className='hero--text'>
        Join unique interactive activities led by one-of-a-kind-hosts — all
        without leaving home.
      </p>
    </article>
  </section>
)
