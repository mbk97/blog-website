import React from "react";
import styled from "styled-components";
import Skeleton from "@mui/material/Skeleton";

const Wrapper = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 2rem;
`;

const LeftContent = styled.div`
  margin-top: 2rem;
`;

const RightContent = styled.div`
  width: 100%;
`;

const BlogContentLoader = () => {
  return (
    <Wrapper>
      <LeftContent>
        <Skeleton variant="circular" width={70} height={70} animation="wave" />
      </LeftContent>
      <RightContent>
        <Skeleton
          variant="text"
          sx={{ fontSize: "1rem", height: "70px" }}
          animation="wave"
        />
        <Skeleton
          variant="rectangular"
          width={"auto"}
          height={200}
          animation="wave"
        />
      </RightContent>
    </Wrapper>
  );
};

export default BlogContentLoader;
