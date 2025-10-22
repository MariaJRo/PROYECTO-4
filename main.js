import './style.css'

import { createHeader } from './src/Components/Header/header.js'
import './src/Components/Header/header.css'

import { createmainElement } from './src/Components/MainM/mainM.js'
import './src/Components/MainM/mainM.css'

import { createFooter } from './src/Components/Footer/footer.js'
import './src/Components/Footer/footer.css'

import { createHome } from './src/Pages/Home/home.js'
import { createAboutMe } from './src/Pages/About-me/about-me.js'
import { createProjects } from './src/Pages/Projects/projects.js'

document.body.appendChild(createHeader())
const main = createmainElement()
document.body.appendChild(main)
document.body.appendChild(createFooter())

const navLinks = document.querySelectorAll('header nav ul li a')

navLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault()
    main.innerHTML = ''

    if (link.innerText === 'HOME') {
      main.appendChild(createHome())
    } else if (link.innerText === 'QUEST') {
      main.appendChild(createAboutMe())
    } else if (link.innerText === 'PROJECTS') {
      main.appendChild(createProjects())
    }
  })
})
