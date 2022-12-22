import lunabus from "../../assets/lunabus.png";
import devlandiaPng from "../../assets/devlandia.png";
import designSystemPng from "../../assets/designsystem.png";
import igniteShopPng from "../../assets/igniteshop.png";
import rocketHelpPng from "../../assets/rockethelp.png";
import jvboxPng from "../../assets/jvbox.png";

import { Container, Titulo } from "./styles";

export function Projetos() {
  return (
    <>
      <Titulo id="projetos">Projetos</Titulo>
      <Container>
        <div className="projeto">
          <a href="https://github.com/jvolima/dev-landia" target="_blank">
            <img src={devlandiaPng} alt="DevLândia" />
          </a>
          <h3>DevLândia</h3>
          <p>Tecnologias: React Native, TS, Node e TypeORM</p>
        </div>
        <div className="projeto">
        <a href="https://lunabus.com.br" target="_blank">
          <img src={lunabus} alt="Luna bus" />
        </a>
          <h3>Luna bus</h3>
          <p>Tecnologias: React, TS e Tailwind</p>
        </div>
        <div className="projeto">
          <a href="https://github.com/jvolima/design-system" target="_blank">
            <img src={designSystemPng} alt="Design System" />
          </a>
          <h3>Design System Ignite Call</h3>
          <p>Tecnologias: React, TS, Storybook, Turbo repo e Changesets</p>
        </div>
        <div className="projeto">
          <a href="https://github.com/jvolima/ignite-shop" target="_blank">
            <img src={igniteShopPng} alt="Ignite Shop" />
          </a>
          <h3>Ignite Shop</h3>
          <p>Tecnologias: Next, TS, Stitches e Stripe</p>
        </div>
        <div className="projeto">
          <a href="https://github.com/jvolima/rockethelp" target="_blank">
            <img src={rocketHelpPng} alt="Rocket help" />
          </a> 
          <h3>Rocket help</h3>
          <p>Tecnologias: React Native, TS e Firebase</p>
        </div>
        <div className="projeto">
          <a href="https://github.com/jvolima/JvBox" target="_blank">
            <img src={jvboxPng} alt="JvBox" />
          </a>         
          <h3>JvBox</h3>
          <p>Tecnologias: Java, HTML, CSS, JavaScript e AJAX</p>
        </div>
      </Container>
    </>
  )
}