import './home.css'

export const createHome = () => {
  const homeContainer = document.createElement('section')
  homeContainer.classList.add('homeContainer')

  const infoArticle = document.createElement('article')
  infoArticle.classList.add('infoArticle')

  const title = document.createElement('h1')
  title.textContent = 'Hi! I am MARIA J. RODRIGUEZ'
  const paragraph = document.createElement('p')
  paragraph.textContent = 'Web Developer student at thePower Tech School'

  infoArticle.appendChild(title)
  infoArticle.appendChild(paragraph)

  const imgArticle = document.createElement('article')
  imgArticle.classList.add('imgArticle')

  const img = document.createElement('img')
  img.src = '/assets/profile.png'
  img.alt = 'Picture of María J. Rodríguez'
  img.classList.add('profilePicture')
  imgArticle.appendChild(img)

  homeContainer.appendChild(infoArticle)
  homeContainer.appendChild(imgArticle)

  return homeContainer
}
