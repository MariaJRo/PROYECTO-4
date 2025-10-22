import './projects.css'

const projects = [
  {
    id: 1,
    title: 'API Playground',
    description: 'A basic project to experiment with API calls.',
    img: '/assets/api.jpeg',
    link: 'https://github.com/MariaJRo/PROYECTO-3' //No hubo manera de subirlo a Netlify después de ocultar la API key//
  },
  {
    id: 2,
    title: 'Interactive page',
    description: 'An example of basic interactivity using JavaScript.',
    img: '/assets/jd.jpeg',
    link: 'https://fanciful-pie-383299.netlify.app/'
  },
  {
    id: 3,
    title: 'Online store',
    description: 'A prototype of an online shop with cart and products.',
    img: '/assets/tienda.jpeg',
    link: 'https://idyllic-haupia-4a640c.netlify.app/'
  },
  {
    id: 4,
    title: 'Grid layout',
    description: 'A modern layout example built with CSS Grid.',
    img: '/assets/grid.jpeg',
    link: 'https://startling-semifreddo-b6bd43.netlify.app/'
  },
  {
    id: 5,
    title: 'Flexbox layout',
    description: 'A responsive structure example using Flexbox.',
    img: '/assets/flex.jpeg',
    link: 'https://peppy-sherbet-c424a7.netlify.app/'
  }
]

export const createProjects = () => {
  const projectsContainer = document.createElement('div')
  projectsContainer.classList.add('projectsContainer', 'flex-container')
  const h1 = document.createElement('h1')
  h1.textContent = 'Projects That Makes Me Smile'
  projectsContainer.appendChild(h1)

  const projectsSection = document.createElement('section')
  projectsSection.classList.add('projectsSection', 'flex-container')

  projects.forEach((project) => {
    const card = document.createElement('div')
    card.classList.add('card')

    const h2 = document.createElement('h2')
    h2.textContent = project.title

    const p = document.createElement('p')
    p.textContent = project.description

    const a = document.createElement('a')
    a.href = project.link
    a.target = '_blank'

    const imgCard = document.createElement('img')
    imgCard.src = project.img
    imgCard.alt = `Project ${project.title}`
    imgCard.classList.add('imgCard')

    a.appendChild(imgCard)
    card.appendChild(h2)
    card.appendChild(p)
    card.appendChild(a)
    projectsSection.appendChild(card)
  })

  projectsContainer.appendChild(projectsSection)

  return projectsContainer
}
