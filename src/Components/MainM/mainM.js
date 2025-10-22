import './mainM.css'
import { createHome } from '../../Pages/Home/home.js'

export const createmainElement = () => {
  const mainElement = document.createElement('main')
  mainElement.classList.add('mainM')

  mainElement.appendChild(createHome())

  return mainElement
}
