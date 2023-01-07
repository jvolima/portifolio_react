import lunabus from "../../assets/lunabus.png";
import devlandiaPng from "../../assets/devlandia.png";
import designSystemPng from "../../assets/designsystem.png";
import igniteShopPng from "../../assets/igniteshop.png";
import rocketHelpPng from "../../assets/rockethelp.png";
import jvboxPng from "../../assets/jvbox.png";

import { ProjectsContainer, Title } from "./styles";
import { Project } from "./Project";

export function Projects() {
  return (
    <>
      <Title id="projects">Projetos</Title>
      <ProjectsContainer>
        <Project title="DevLândia" description="Tecnologias: React Native, TS, Node e TypeORM" image={devlandiaPng} />
        <Project title="Luna bus" description="Tecnologias: React, TS e Tailwind" image={lunabus} />
        <Project title="Design System Ignite Call" description="Tecnologias: React, TS, Storybook, Turbo repo e Changesets" image={designSystemPng} />
        <Project title="Ignite Shop" description="Tecnologias: Next, TS, Stitches e Stripe" image={igniteShopPng} />
        <Project title="Rocket help" description="Tecnologias: React Native, TS e Firebase" image={rocketHelpPng} />
        <Project title="JvBox" description="Tecnologias: Java, HTML, CSS, JavaScript e AJAX" image={jvboxPng} />
      </ProjectsContainer>
    </>
  )
}