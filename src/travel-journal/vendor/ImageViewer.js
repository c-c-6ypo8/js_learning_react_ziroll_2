import { useEffect } from 'react'
import './ImageViewer.css'

const imageViewerBind = () => {
  const modal = document.getElementById('modal-image-view')

  // Get the image and insert it inside the modal - use its "alt" text as a caption
  const imgs = document.getElementsByClassName('image')
  const modalImg = document.getElementById('modal-image')
  const captionText = document.getElementById('caption')

  console.log(imgs)

  for (let img of imgs) {
    img.onclick = (e) => {
      modal.style.display = 'block'
      modalImg.src = e.target.dataset.full
      captionText.innerHTML = e.target.alt
    }
  }

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName('close')[0]

  // When the user clicks on <span> (x), close the modal
  span.onclick = () => {
    modal.style.display = 'none'
  }

  modal.onclick = () => {
    modal.style.display = 'none'
  }
}

export const ImageViewer = () => {
  useEffect(() => {
    imageViewerBind()
  }, [])
  return (
    <div id='modal-image-view' className='modal'>
      <span className='close'>×</span>
      <img className='modal-content' id='modal-image' alt='modal' />
      <div id='caption'></div>
    </div>
  )
}
