import { ComputerTower, Desktop, DeviceMobile } from "phosphor-react";
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
          <Desktop color="#00DF5E" size={60} />
          <h3>Sites</h3>
          <div className="line"></div>
        </div>
        <div className="service">
          <DeviceMobile color="#00DF5E" size={60} />
          <h3>Aplicativos</h3>
          <div className="line"></div>
        </div>
        <div className="service">
          <ComputerTower color="#00DF5E" size={60} />
          <h3>APIs</h3>
          <div className="line"></div>
        </div>
      </ServicesContainer>
    </>
  )
}