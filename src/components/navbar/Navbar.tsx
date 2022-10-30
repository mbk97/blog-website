import React from "react";
import {
  BottomItems,
  NameLogo,
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

const Navbar = () => {
  return (
    <NavContainer>
      <NavItemsWrapper>
        <TopItems>
          <NameWrapper>
            <NameLogo>M</NameLogo>
          </NameWrapper>
          <TrendTextWrapper>
            <NavIcon>
              <BiTrendingUp className="icon" />
            </NavIcon>
            <NavTitle>Trending</NavTitle>
          </TrendTextWrapper>
        </TopItems>
        <BottomItems>
          <NavIcon>
            <IoIosAddCircleOutline className="icon" />
          </NavIcon>
          <NavTitle>Create</NavTitle>
        </BottomItems>
      </NavItemsWrapper>
    </NavContainer>
  );
};

export default Navbar;
