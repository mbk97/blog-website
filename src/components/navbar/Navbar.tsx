import React from "react";
import {
  BottomItems,
  NameLogo,
  NameTitle,
  NameWrapper,
  NavContainer,
  NavIcon,
  NavItemsWrapper,
  NavTitle,
  TopItems,
  TrendTextWrapper,
} from "./style";
import { BiTrendingUp } from "react-icons/bi";
import { IoIosAddCircleOutline } from "react-icons/io";
import { DashboardLink } from "../../GlobalStyle";
import useUserData from "../../hooks/useUserData";

const Navbar = () => {
  const data = useUserData().name;
  const nameSymbol = data.charAt(0);
  const name = data.split(" ")[0];

  return (
    <NavContainer>
      <NavItemsWrapper>
        <TopItems>
          <NameWrapper>
            <DashboardLink to="/dashboard/latest">
              <NameLogo>{nameSymbol}</NameLogo>
              <NameTitle>{name}</NameTitle>
            </DashboardLink>
          </NameWrapper>
          <TrendTextWrapper>
            <DashboardLink to="/dashboard/latest">
              <NavIcon>
                <BiTrendingUp className="icon" />
              </NavIcon>
              <NavTitle>Latest</NavTitle>
            </DashboardLink>
          </TrendTextWrapper>
        </TopItems>
        <BottomItems>
          <DashboardLink to="/dashboard/create">
            <NavIcon>
              <IoIosAddCircleOutline className="icon" />
            </NavIcon>
            <NavTitle>Create</NavTitle>
          </DashboardLink>
        </BottomItems>
      </NavItemsWrapper>
    </NavContainer>
  );
};

export default Navbar;
