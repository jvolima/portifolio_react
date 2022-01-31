import smileSvg from "../../assets/smile.svg";
import mailSvg from "../../assets/mail.svg";
import githubSvg from "../../assets/github.svg";
import phoneSvg from "../../assets/phone.svg";

import { Container } from "./styles";

export function Contatos() {
  return (
    <Container>
      <div className="imgAndDescription">
        <div className="elipse">
          <img src={smileSvg} alt="Smile" />
        </div>       
        <h3>Meu Nome</h3>
        <p>João Vitor Lima</p>
      </div>
      <div className="imgAndDescription">
        <div className="elipse">
          <img src={mailSvg} alt="Mail" />
        </div>
        <h3>E-mail</h3>
        <p>jvolima2004@gmail.com</p>
      </div>
      <div className="imgAndDescription">
        <div className="elipse">
          <img src={githubSvg} width="32px" height="32px" alt="Github" />
        </div>
        <h3>Github</h3>
        <p>jvolima</p>
      </div>
      <div className="imgAndDescription">
        <div className="elipse">
          <img src={phoneSvg} alt="Phone" /> 
        </div>
        <h3>Telefone</h3>
        <p>(44) 99742-8611</p>
      </div>
    </Container>
  )
}