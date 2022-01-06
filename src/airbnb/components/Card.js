import './Card.css'
import star from '../assets/star.png'

export const Card = (p) => {  
  let badgeText
  if (p.openSpots < 1) {
    badgeText = 'SOLD OUT'
  } else if (p.location?.toLowerCase() === 'online') {
    badgeText = 'ONLINE'    
  }
  return (
    <article className='card'>
      {badgeText && <div className='card--status'>{badgeText}</div>}
      <img
        className='card--picture'
        src={'./assets/airbnb/' + (p.img ?? 'exp-empty.png')}
        alt={p.img ?? 'exp-empty.png'}
      />
      <p className='card--stats'>
        <img className='card--stats--star' src={star} alt='star' />
        <span> {p.stats?.rating?.toPrecision(2) ?? '???'} </span>
        <span className='grayed'>({p.stats?.reviewCount ?? '?'}) • </span>
        <span className='grayed'>{p.location ?? '?'}</span>
      </p>
      <p>{p.title ?? '???'}</p>
      <p>
        <strong>From {'$' + (p.price ?? '?')} </strong>/ person
      </p>
    </article>
  )
}
