import { ArrowUp } from "phosphor-react";
import { ReturnToHeaderContainer } from "./styles";

export function ReturnToHeader() {
  return (
    <ReturnToHeaderContainer href="#header">
      <ArrowUp size={28} color="#FFFFFF" weight="bold" />
    </ReturnToHeaderContainer>
  )
}