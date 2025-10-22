export const createFooter = () => {
  const footer = document.createElement('footer')
  footer.classList.add('footer', 'flex-container')

  const socialContainer = document.createElement('section')
  socialContainer.classList.add('socialContainer')

  const linkedinLink = document.createElement('a')
  linkedinLink.href = '#' //Añadir más adelante enlace de Linkedin//
  const linkedinIcon = document.createElement('img')
  linkedinIcon.src = '/assets/linkedIcon.png'
  linkedinIcon.alt = 'LinkedIn'
  linkedinIcon.classList.add('linkedinIcon')
  linkedinLink.appendChild(linkedinIcon)

  const instaLink = document.createElement('a')
  instaLink.href = '#' // añadir más adelante enlace de Instagram//
  const instaIcon = document.createElement('img')
  instaIcon.src = '/assets/instaIcon.png'
  instaIcon.alt = 'Instagram'
  instaIcon.classList.add('instaIcon')
  instaLink.appendChild(instaIcon)

  socialContainer.appendChild(linkedinLink)
  socialContainer.appendChild(instaLink)

  const copyrightSection = document.createElement('section')
  copyrightSection.classList.add('copyright')
  const copyrightText = document.createElement('p')
  copyrightText.textContent = '© 2025 María J Rodríguez. All rights reserved.'
  copyrightSection.appendChild(copyrightText)

  footer.appendChild(socialContainer)
  footer.appendChild(copyrightSection)

  return footer
}
