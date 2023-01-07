import imageSvg from "../../assets/image.svg"
import { Container } from "./styles";

const resume = "curriculo.pdf"

interface Props {
  handleOpenContactModal: () => void;
}

export function Presentation({ handleOpenContactModal }: Props) {
  return (
    <Container>
      <div className="infos">
        <h1>Olá, eu sou o João Vitor Lima :)</h1>
        <p>Desenvolvedor Junior Full-Stack</p>
        <div className="buttons">
          <a href={resume} download={resume} target="_blank" type="application/pdf">
            <button type="button">Download CV</button>
          </a>
          <button onClick={handleOpenContactModal} className="black_button" type="button">
            Entrar em contato
          </button>
        </div>
      </div>
      <div className="image">
        <img src={imageSvg} alt="Imagem" />
      </div>
    </Container>
  )
}