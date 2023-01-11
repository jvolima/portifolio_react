import styled from 'styled-components'

export const SkillContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 11rem;
  height: 11rem;
  border: 1px solid var(--gray-200);
  box-sizing: border-box;
  background: var(--gray-400);
  position: relative;

  &:hover {
    .infos {
      display: flex;
    }
  }

  .img {
    svg {
      width: 90px;
      height: 90px;
    }
  }
`

export const InfosContainer = styled.div`
  display: none;
  flex-direction: column;
  width: 100%;
  position: absolute;
  z-index: 1000;
  bottom: 0;
  background: var(--dark);
  padding: 1rem;

  h2 {
    font-size: 1.25rem;
    color: var(--gray);
  }

  .stars {
    display: flex;
    align-items: center;
    gap: 0.25rem;
  }
`
