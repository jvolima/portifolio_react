import { useState } from "react";
import { Menu } from "../Menu";
import { Container } from "./styles";

export function Header() {
  const [bars, setBars] = useState(false);

  function handleClickMenu() {
    setBars(!bars);

    document.body.style.overflow = bars ? "initial" : "hidden"

    const menuSection = document.querySelector(".menu-section") as Element;
    menuSection.classList.toggle("on", !bars);
  }

  return (
    <Container>
      <h1>Portifólio</h1>
      <div className="menu-section">
        <div className="menu-toggle" onClick={handleClickMenu}>
          <div className="one"></div>
          <div className="two"></div>
          <div className="three"></div>
          <div className="four"></div>
        </div>
          {
            bars == true ? <Menu handleClickMenu={handleClickMenu}></Menu> : null 
          }
        <nav>
          <ul>
            <li><a href="./#sobreMim">Sobre mim</a></li>
            <li><a href="./#projetos">Projetos</a></li>
            <li><a href="./#servicos">Serviços</a></li>
            <li><a href="./#minhasSkills">Minhas skills</a></li>
          </ul>
        </nav>
      </div>
    </Container>
  )
}