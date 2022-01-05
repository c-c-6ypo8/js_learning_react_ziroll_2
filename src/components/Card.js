import './Card.css'
import star from '../assets/star.png'

export const Card = ({
  img,
  rating,
  reviewCount,
  country,
  title,
  price,
  status,
}) => (
  <div className='card'>
    {status && <div className='card--status'>{status}</div>}
    <img
      className='card--picture'
      src={'./assets/' + (img ?? 'exp-empty.png')}
      alt='1'
    />
    <p className='card--stats'>
      <img className='card--stats--star' src={star} alt='star' />
      <span>&nbsp;{rating.toPrecision(2) ?? '???'}&nbsp;</span>
      <span className='grayed'>({reviewCount ?? '?'}) • </span>
      <span className='grayed'>&nbsp;{country ?? '?'}</span>
    </p>
    <p>{title ?? '???'}</p>
    <p>
      <strong>From ${price ?? '?'} </strong>/ person
    </p>
  </div>
)
