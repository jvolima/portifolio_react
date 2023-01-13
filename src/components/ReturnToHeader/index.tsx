import { ArrowUp } from 'phosphor-react'
import ScrollToTop from 'react-scroll-up'
import { ReturnToHeaderContainer } from './styles'

export function ReturnToHeader() {
  return (
    <ScrollToTop showUnder={100} duration={1000}>
      <ReturnToHeaderContainer href="#header">
        <ArrowUp size={28} color="#FFFFFF" weight="bold" />
      </ReturnToHeaderContainer>
    </ScrollToTop>
  )
}
