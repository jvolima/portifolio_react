import imageSvg from "../../assets/image.svg"
import { Container } from "./styles";

export function Apresentacao() {
  return (
    <Container>
      <div className="infos">
        <h1>Olá, eu sou o João Vitor Lima :)</h1>
        <p>Desenvolvedor Junior Full-Stack</p>
        <button type="button">Download CV</button>
        <button type="button">Entrar em contato</button>
      </div>
      <div className="imagem">
        <img src={imageSvg} alt="" />
      </div>
    </Container>
  )
}