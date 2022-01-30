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
      <Titulo>Projetos</Titulo>
      <Container>
        <div className="projeto">
          <img src={dtmoneyPng} alt="Dtmoney" />
          <h3>dtmoney</h3>
          <p>Tecnologias: React, TS e Styled-components</p>
        </div>
        <div className="projeto">
          <img src={goRestaurantPng} alt="Go Restaurant" />
          <h3>Go Restaurant</h3>
          <p>Tecnologias: React, TS e Styled-components</p>
        </div>
        <div className="projeto">
          <img src={padariaPng} alt="Padaria" />
          <h3>Panificadora Requinte</h3>
          <p>Tecnologias: HTML, CSS e JS</p>
        </div>
        <div className="projeto">
          <img src={watchmePng} alt="WatchMe" />
          <h3>WatchMe</h3>
          <p>Tecnologias: React, TS e Styled-components</p>
        </div>
        <div className="projeto">
          <img src={todoListPng} alt="ToDo List" />
          <h3>ToDo List</h3>
          <p>Tecnologias: React, TS e Styled-components</p>
        </div>
        <div className="projeto">
          <img src={rocketShoesPng} alt="RocketShoes" />
          <h3>RocketShoes</h3>
          <p>Tecnologias: React, TS e Styled-components</p>
        </div>
      </Container>
    </>
  )
}