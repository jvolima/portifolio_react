import imageSvg from "../../assets/image.svg"
import { Container } from "./styles";

const curriculo = "curriculo.pdf"

interface ApresentacaoProps {
  handleOpenContactModal: () => void;
}

export function Apresentacao({ handleOpenContactModal }: ApresentacaoProps) {
  return (
    <Container>
      <div className="infos">
        <h1>Olá, eu sou o João Vitor Lima :)</h1>
        <p>Desenvolvedor Junior Full-Stack</p>
        <div className="botoes">
          <a href="curriculo.pdf" download="curriculo.pdf" target="_blank" type="application/pdf">
            <button type="button">Download CV</button>
          </a>
          <button onClick={handleOpenContactModal} className="botao_preto" type="button">
            Entrar em contato
          </button>
        </div>
      </div>
      <div className="imagem">
        <img src={imageSvg} alt="Imagem" />
      </div>
    </Container>
  )
}