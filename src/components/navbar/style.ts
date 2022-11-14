import styled from "styled-components";

export const NavContainer = styled.div`
  position: fixed;
  border-right: 2px solid #6eeb83;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 95px;
  height: 100vh;
  bottom: 0px;

  @media (max-width: 900px) {
    border: 2px solid #6eeb83;
    width: 90%;
    height: 95px;
    bottom: 0px;
    background: #272727;
  }
`;

export const NavItemsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 75vh;

  @media (max-width: 900px) {
    flex-direction: row;
    height: 95px;
    align-items: center;
    justify-content: center;
  }
`;

export const TopItems = styled.div`
  @media (max-width: 900px) {
    height: auto;
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 30vw;
  }

  @media (max-width: 470px) {
    width: 100%;
  }
`;

export const BottomItems = styled.div`
  @media (max-width: 900px) {
    display: flex;
    align-items: center;
  }
  @media (max-width: 470px) {
    display: block;
  }
`;

export const NameWrapper = styled.div`
  @media (max-width: 900px) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`;

export const NameLogo = styled.div`
  width: 50px;
  height: 50px;
  color: black;
  background-color: #6eeb83;
  text-transform: uppercase;
  font-family: "Lexend Deca";
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 40px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  margin-bottom: 1rem;
  @media (max-width: 900px) {
    margin-bottom: 0rem;
  }
`;

export const NavIcon = styled.div`
  .icon {
    color: #6eeb83;
    font-size: 3rem;
    @media (max-width: 470px) {
      margin-bottom: 0rem;
    }
  }
`;

export const NavTitle = styled.p`
  font-family: "Lexend Deca";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 25px;
  color: #ffffff;
  /* padding-left: 10px; */
`;

export const NameTitle = styled(NavTitle)`
  font-size: 12px;
`;

export const TrendTextWrapper = styled.div`
  margin: 3rem 0;
  @media (max-width: 900px) {
    display: flex;
    align-items: center;
    margin: 0rem;
    padding: 0 30px;
  }
  @media (max-width: 470px) {
    display: block;
  }
`;
