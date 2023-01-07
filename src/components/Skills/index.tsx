import htmlSvg from "../../assets/html.svg";
import cssSvg from "../../assets/css.svg";
import jsSvg from "../../assets/js.svg";
import reactSvg from "../../assets/react.svg";
import tsSvg from "../../assets/ts.svg";
import nodeSvg from "../../assets/node.svg"

import { SkillsContainer, Title } from "./styles";

export function Skills() {
  return (
    <>
      <Title id="skills">Minhas skills</Title>
      <SkillsContainer>
        <div className="skill"><img src={htmlSvg} alt="HTML" /></div>
        <div className="skill"><img src={cssSvg} alt="CSS" /></div>
        <div className="skill"><img src={jsSvg} alt="JS" /></div>
        <div className="skill"><img src={reactSvg} alt="React" /></div>
        <div className="skill"><img src={tsSvg} alt="Typescript" width="80px" height="80px" /></div>
        <div className="skill"><img src={nodeSvg} alt="Nodejs" width="80px" height="80px" /></div>
      </SkillsContainer>
    </>
  )
}