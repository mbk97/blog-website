import styled from "styled-components";

export const EditWrapper = styled.div`
  background: #272727;
  height: auto;

  @media (max-width: 1200px) {
    height: 100vh;
  }
`;

export const EditContentWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const EditContent = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
  margin-top: 5rem;
  flex-direction: column;
`;
