import codeSvg from "../../assets/code.svg";
import smartphoneSvg from "../../assets/smartphone.svg";

import { Container, Titulo } from "./styles";

export function Servicos() {
  return (
    <>
      <Titulo id="servicos">
        Serviços
      </Titulo>
      <Container>
        <div className="servico">
          <img src={codeSvg} alt="Code" />
          <h3>Sites</h3>
          <div className="linha"></div>
        </div>
        <div className="servico">
          <img src={smartphoneSvg} alt="smartphone" />
          <h3>Aplicativos</h3>
          <div className="linha"></div>
        </div>
        <div className="servico">
          <img src={codeSvg} alt="Code" />
          <h3>APIs</h3>
          <div className="linha"></div>
        </div>
      </Container>
    </>
  )
}