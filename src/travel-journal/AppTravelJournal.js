import './AppTravelJournal.css'
import './vendor/ImageViewer'
import { Navbar } from './components/Navbar'
import { Place } from './components/Place'
import { ImageViewer } from './vendor/ImageViewer'
import { data } from './DataTravelJournal'

export const AppTravelJournal = () => (
  <div className='app-travel-journal'>
    <header>
      <Navbar />
    </header>
    <main className="travel-main">
      <section className='travel-places'>
        {data.map((placeData) => {
          return <Place {...placeData} key={placeData.id} />
        })}
      </section>      
    </main>
    <ImageViewer />
  </div>
)