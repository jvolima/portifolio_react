import goRestaurantPng from "../../assets/goRestaurant.png";
import dtmoneyPng from "../../assets/dtmoney.png";
import padariaPng from "../../assets/padaria.png";
import watchmePng from "../../assets/watchme.png";
import todoListPng from "../../assets/todoList.png";
import rocketShoesPng from "../../assets/rocketShoes.png";

import { Container, Titulo } from "./styles";

export function Projetos() {
  return (
    <>
      <Titulo id="projetos">Projetos</Titulo>
      <Container>
        <div className="projeto">
          <a href="https://github.com/jvolima/dtmoney" target="_blank">
            <img src={dtmoneyPng} alt="Dtmoney" />
          </a>
          <h3>dtmoney</h3>
          <p>Tecnologias: React, TS e Styled-components</p>
        </div>
        <div className="projeto">
        <a href="https://github.com/jvolima/refatorando_classes" target="_blank">
          <img src={goRestaurantPng} alt="Go Restaurant" />
        </a>
          <h3>Go Restaurant</h3>
          <p>Tecnologias: React, TS e Styled-components</p>
        </div>
        <div className="projeto">
          <a href="https://github.com/jvolima/padaria_requinte" target="_blank">
            <img src={padariaPng} alt="Padaria" />
          </a>
          <h3>Panificadora Requinte</h3>
          <p>Tecnologias: HTML, CSS e JS</p>
        </div>
        <div className="projeto">
          <a href="https://github.com/jvolima/filmes" target="_blank">
            <img src={watchmePng} alt="WatchMe" />
          </a>
          <h3>WatchMe</h3>
          <p>Tecnologias: React, TS e Styled-components</p>
        </div>
        <div className="projeto">
          <a href="https://github.com/jvolima/task-list" target="_blank">
            <img src={todoListPng} alt="ToDo List" />
          </a> 
          <h3>ToDo List</h3>
          <p>Tecnologias: React, TS e Styled-components</p>
        </div>
        <div className="projeto">
          <a href="https://github.com/jvolima/carrinho_de_compras" target="_blank">
            <img src={rocketShoesPng} alt="RocketShoes" />
          </a>         
          <h3>RocketShoes</h3>
          <p>Tecnologias: React, TS e Styled-components</p>
        </div>
      </Container>
    </>
  )
}