import './Place.css'
import mark from '../assets/mark.png'

export const Place = (p) => {
  const assetsFolder = './assets/travel-journal/'
  return (
    <article className='travel-place'>
      <img
        className='image'
        src={assetsFolder + p.imagePreview}
        data-full={assetsFolder + p.imageFull}
        alt={p.title}
      />
      <div className='travel-place-info'>
        <div className='travel-place-info-location'>
          <img src={mark} alt='mark' />
          <span className='travel-place-info-location-country'>
            {p.location?.toUpperCase()}
          </span>
          <a href={p.googleMapsUrl} className='travel-place-info-location-link'>
            View on Google Maps
          </a>
        </div>
        <a href={p.url} className='travel-place-info-title'>
          {p.title}
        </a>
        <div className='travel-place-info-period'>
          {p.startDate} - {p.endDate}
        </div>
        <div className='travel-place-info-text'>{p.description}</div>
      </div>
    </article>
  )
}
