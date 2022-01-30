import { Container, Titulo } from "./styles";


export function Projetos() {
  return (
    <>
      <Titulo>Projetos</Titulo>
      <Container>
        <div className="projeto">
          <img src="" alt="" />
          <h3>Dtmoney</h3>
          <p>Tecnologias: React, Typescript, Styled-components</p>
        </div>
        <div className="projeto">
          <img src="" alt="" />
          <h3>Go Restaurant</h3>
          <p>Tecnologias: React, Typescript, Styled-components</p>
        </div>
        <div className="projeto">
          <img src="" alt="" />
          <h3>Panificadora Requinte</h3>
          <p>Tecnologias: HTML, CSS e JS</p>
        </div>
      </Container>
    </>
  )
}