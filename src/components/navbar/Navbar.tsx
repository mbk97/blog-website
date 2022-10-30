import React, { useState } from "react";
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
import { DashboardLink } from "../../GlobalStyle";

const Navbar = () => {
  const [activeNav, setActiveNav] = useState(false);
  console.log(window.location.href);
  return (
    <NavContainer>
      <NavItemsWrapper>
        <TopItems>
          <NameWrapper>
            <NameLogo>M</NameLogo>
          </NameWrapper>
          <TrendTextWrapper>
            <DashboardLink to="/dashboard/latest">
              <NavIcon>
                <BiTrendingUp className="icon" />
              </NavIcon>
              <NavTitle>Trending</NavTitle>
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
