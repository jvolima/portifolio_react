import { Star } from "phosphor-react";
import { ReactNode, useState } from "react";
import { InfosContainer, SkillContainer } from "./styles";

interface Props {
  svg: any
  tech: string
  level: 1 | 2 | 3 | 4 | 5
}

export function Skill({ svg, tech, level }: Props) {
  const starsColloredCount = level as number
  const starsEmpty = 5 - starsColloredCount

  return (
    <SkillContainer>
      <div className="img">
        {svg}
      </div>
      <InfosContainer className="infos">
        <h2>{tech}</h2>
        <div className="stars">
          {Array.from(Array(starsColloredCount), (e, i) => (
            <Star color="#00DF5E" weight="fill" />
          ))}

          {Array.from(Array(starsEmpty), (e, i) => (
            <Star color="#FFFFFF" weight="fill" />
          ))}
        </div>
      </InfosContainer>
    </SkillContainer>
  )
}