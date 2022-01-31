import { Container } from "./styles";

export function Header() {
  return (
    <Container>
      <h1>Portifólio</h1>
      <ul>
        <li><a href="./#sobreMim">Sobre mim</a></li>
        <li><a href="./#projetos">Projetos</a></li>
        <li><a href="./#servicos">Serviços</a></li>
        <li><a href="./#minhasSkills">Minhas skills</a></li>
      </ul>
    </Container>
  )
}