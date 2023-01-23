import { Moon, SunDim } from 'phosphor-react'
import { useState } from 'react'
import { Menu } from './Menu'
import { HeaderContainer } from './styles'

interface Props {
  handleSwitchTheme: () => void
  theme: string
}

export function Header({ handleSwitchTheme, theme }: Props) {
  const [bars, setBars] = useState(false)

  function handleClickMenu() {
    setBars(!bars)

    document.body.style.overflow = bars ? 'initial' : 'hidden'

    const menuSection = document.querySelector('.menu-section') as Element
    menuSection.classList.toggle('on', !bars)
  }

  return (
    <HeaderContainer id="header">
      <h1>Portfólio</h1>
      <div className="menu-section">
        {bars === true ? <Menu handleClickMenu={handleClickMenu}></Menu> : null}
        <nav>
          <ul>
            <li>
              <a href="./#about">Sobre mim</a>
            </li>
            <li>
              <a href="./#projects">Projetos</a>
            </li>
            <li>
              <a href="./#services">Serviços</a>
            </li>
            <li>
              <a href="./#skills">Minhas skills</a>
            </li>
          </ul>
        </nav>
        <button onClick={handleSwitchTheme}>
          {theme === 'light' ? <Moon size={32} /> : <SunDim size={32} />}
        </button>
        <div className="menu-toggle" onClick={handleClickMenu}>
          <div className="one"></div>
          <div className="two"></div>
          <div className="three"></div>
          <div className="four"></div>
        </div>
      </div>
    </HeaderContainer>
  )
}
