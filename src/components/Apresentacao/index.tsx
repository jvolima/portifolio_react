import imageSvg from "../../assets/image.svg"
import { Container } from "./styles";

const curriculo = "curriculo.pdf"

export function Apresentacao() {
  return (
    <Container>
      <div className="infos">
        <h1>Olá, eu sou o João Vitor Lima :)</h1>
        <p>Desenvolvedor Junior Full-Stack</p>
        <a href="curriculo.pdf" download="curriculo.pdf" target="_blank" type="application/pdf">
          <button type="button">Download CV</button>
        </a>
        <a href="https://www.linkedin.com/in/jo%C3%A3o-vitor-de-oliveira-lima-36b573215" target="_blank">
          <button className="botao_preto" type="button">Entrar em contato</button>
        </a>
      </div>
      <div className="imagem">
        <img src={imageSvg} alt="Imagem" />
      </div>
    </Container>
  )
}