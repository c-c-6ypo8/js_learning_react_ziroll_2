import './Cards.css'
import exp1 from '../assets/exp1.png'
import star from '../assets/star.png'

export const Cards = () => (
  <section className='cards'>
    <div className='card'>
      <div className='card--status'>SOLD OUT</div>
      <img className='card--picture' src={exp1} alt='1' />
      <div className='card--text'>
        <p className='card--text--stats'>
          <img className='card--text--stats--star' src={star} alt='star' />
          &nbsp;5.0&nbsp;
          <div className='card--text--stats-grayed'>(6) • USA</div>
        </p>
        <p>Life lessons with Katie Zaferes</p>
        <p>
          <strong>From $136 </strong>/ person
        </p>
      </div>
    </div>
  </section>
)
