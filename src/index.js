import './index.css'
import React from 'react'
import ReactDOM from 'react-dom'
import { AppAirbnb } from './airbnb/AppAirbnb'
import { AppTravelJournal } from './travel-journal/AppTravelJournal'

const rootElement = document.getElementById('root')
const linkAirbnb = document.getElementById('airbnb')
const linkTravelJournal = document.getElementById('travel-journal')

const apps = [
  { link: linkAirbnb, app: <AppAirbnb /> },
  { link: linkTravelJournal, app: <AppTravelJournal /> },
]

const renderApp = (app) => {
  ReactDOM.render(<React.StrictMode>{app}</React.StrictMode>, rootElement)
}

const choose = (target) => {
  apps.forEach((el) => {
    el.link.classList.remove('chosen')
  })
  target.classList.add('chosen')
  for (let el of apps) {
    if (el.link === target) {
      renderApp(el.app)
      break
    }
  }
}

for (let app of apps) {
  app.link.addEventListener('click', (e) => {
    e.preventDefault()  
    choose(app.link)
  })
}

choose(linkTravelJournal)
