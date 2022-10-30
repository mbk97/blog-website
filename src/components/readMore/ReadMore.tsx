import React from "react";
import { CustomTitle } from "../common/text/Text";
import {
  Container,
  ReadMoreContentText,
  ReadMoreSmallText,
  ReadMoreUserDetails,
  ReadMoreWrapper,
} from "./style";

const ReadMore = () => {
  return (
    <Container>
      <ReadMoreWrapper>
        <CustomTitle>
          15 Disadvantages Of Freedom And How You Can Workaround It.
        </CustomTitle>
        <ReadMoreUserDetails>
          <ReadMoreSmallText>written by @samurai2099</ReadMoreSmallText>
          <ReadMoreSmallText>on 27 may 2022</ReadMoreSmallText>
        </ReadMoreUserDetails>
        <ReadMoreContentText>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt
          velit laboriosam dicta voluptatum esse. Nam voluptas, ipsam dolorum
          iusto dolore magnam necessitatibus sit ducimus nesciunt doloribus sunt
          est, repellendus quam. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Enim doloremque, praesentium consequuntur, et quos
          doloribus, cupiditate molestias adipisci eligendi laboriosam explicabo
          maxime voluptatum quia! Quod quisquam rerum eveniet? Sit cumque nam,
          molestiae enim quas corrupti nesciunt autem a dolor molestias, quam
          veritatis exercitationem blanditiis consectetur explicabo eaque
          obcaecati aperiam vero dolorem maiores possimus odio! Necessitatibus
          rem officiis aut quae dicta quasi provident fuga? Ducimus delectus
          sint, doloribus aliquam porro odio! Aut quos voluptatem, officia,
          pariatur inventore repellat saepe consequatur architecto et quidem
          sunt vero tenetur! Est commodi consequatur ipsa officiis?
        </ReadMoreContentText>
      </ReadMoreWrapper>
    </Container>
  );
};

export default ReadMore;
