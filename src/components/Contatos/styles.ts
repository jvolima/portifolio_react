import styled from "styled-components";


export const Container = styled.div`
  width: 90%;
  max-width: 1120px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
  gap: 2.75rem;
  margin: 0 auto;
  margin-top: 5.3rem;

  .imgAndDescription {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .elipse {
      display: flex;
      justify-content: center;
      align-items: center;
      background: var(--gray-400);
      width: 3.875rem;
      height: 3.875rem;
      border-radius: 100%;
    }

    h3 {
      margin-top: 1rem;
      color: var(--white);
      font-weight: bold;
      font-size: 1.125rem;
      line-height: 1.5rem;
    }

    p {
      color: var(--gray);
      font-size: 1rem;
      line-height: 1.25rem;
    }
  }
`