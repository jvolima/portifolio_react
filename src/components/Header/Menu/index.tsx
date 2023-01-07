import { Container } from "./styles";

interface MenuProps {
  handleClickMenu: () => void;
}

export function Menu({ handleClickMenu }: MenuProps) {
  function handleClickOption() {
    const open = true;
    handleClickMenu();
    document.body.style.overflow = open ? "initial" : "hidden"
  }

  return (
    <Container>
      <ul>
        <li><a href="./#about" onClick={handleClickOption}>Sobre mim</a></li>
        <li><a href="./#projects" onClick={handleClickOption}>Projetos</a></li>
        <li><a href="./#services" onClick={handleClickOption}>Serviços</a></li>
        <li><a href="./#skills" onClick={handleClickOption}>Minhas skills</a></li>
      </ul>
    </Container>
  )
}