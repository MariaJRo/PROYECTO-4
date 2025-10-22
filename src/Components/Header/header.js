import './header.css'

const createMenu = (options, ulClassName) => {
  const nav = document.createElement('nav')
  const ul = document.createElement('ul')
  ul.classList.add(ulClassName)

  options.forEach((option) => {
    const li = document.createElement('li')
    const link = document.createElement('a')
    link.href = '#'
    link.innerText = option
    link.classList.add(option.toLowerCase())
    li.appendChild(link)
    ul.appendChild(li)
  })

  nav.appendChild(ul)
  return nav
}

export const createHeader = () => {
  const header = document.createElement('header')

  const menuNav = createMenu(['HOME', 'QUEST', 'PROJECTS'], 'menuNavUl') // ABOUT ME - demasiado largo, cambio por QUEST//
  const logo = document.createElement('img')
  logo.src = '/assets/logo.png'
  logo.alt = 'Logo'
  logo.classList.add('logo')

  header.appendChild(menuNav)
  header.appendChild(logo)

  return header
}
