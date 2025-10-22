import './about-me.css'

export const createAboutMe = () => {
  const aboutContainer = document.createElement('section')
  aboutContainer.classList.add('aboutContainer')

  const title = document.createElement('h1')
  title.textContent = 'The Journey So Far'

  const paragraph = document.createElement('p')
  paragraph.textContent =
    'My journey has taken me from the arts to tourism, through the video game industry and now into the world of web development.'

  const introduction = document.createElement('article')
  introduction.classList.add('introduction')

  const ulList = document.createElement('ul')

  const introductionList = [
    'BA in Art History from the University of Granada',
    'Higher Technician as a Guide, Information and Tourist Assistance',
    'Lapsus of 8 years living in the UK',
    '5 years experience in the video game industry',
    'Full Stack Developer student',
    'Reservation agent (while completing studies)'
  ]

  introductionList.forEach((sentence) => {
    const li = document.createElement('li')
    li.textContent = sentence
    li.classList.add('introductionListLi')
    ulList.appendChild(li)
  })

  const imgIntroduction = document.createElement('div')
  imgIntroduction.classList.add('imgIntroduction')

  const imgIntro = document.createElement('img')
  imgIntro.src = '/assets/path.png'
  imgIntro.alt = 'little path'
  imgIntro.classList.add('imgIntro')

  imgIntroduction.appendChild(imgIntro)

  introduction.appendChild(ulList)
  introduction.appendChild(imgIntroduction)

  aboutContainer.appendChild(title)
  aboutContainer.appendChild(paragraph)
  aboutContainer.appendChild(introduction)

  return aboutContainer
}
