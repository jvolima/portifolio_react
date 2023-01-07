import codeSvg from "../../assets/code.svg";
import smartphoneSvg from "../../assets/smartphone.svg";

import { ServicesContainer, Title } from "./styles";

export function Services() {
  return (
    <>
      <Title id="services">
        Serviços
      </Title>
      <ServicesContainer>
        <div className="service">
          <img src={codeSvg} alt="Code" />
          <h3>Sites</h3>
          <div className="line"></div>
        </div>
        <div className="service">
          <img src={smartphoneSvg} alt="smartphone" />
          <h3>Aplicativos</h3>
          <div className="line"></div>
        </div>
        <div className="service">
          <img src={codeSvg} alt="Code" />
          <h3>APIs</h3>
          <div className="line"></div>
        </div>
      </ServicesContainer>
    </>
  )
}