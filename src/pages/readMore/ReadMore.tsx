import React, { useEffect } from "react";
import { GeneralContentWrapper } from "../../GlobalStyle";
import { CustomTitle } from "../../components/common/text/Text";
import {
  ReadMoreContentText,
  ReadMoreSmallText,
  ReadMoreUserDetails,
} from "./style";
import { useParams } from "react-router-dom";
import { getSinglePostAction } from "../../components/redux/actions/blog";
import { useAppDispatch } from "../../components/redux/store";
import { useTypedSelector } from "../../components/redux/reducers/rootReducer";
import moment from "moment";
import ContentLoader from "../../components/contentLoader/ContentLoader";

const ReadMore = () => {
  const id = useParams().id;
  const dispatch = useAppDispatch();
  const blogData = useTypedSelector((state) => state.blogs.singleBlog);
  const loadingBlog = useTypedSelector(
    (state) => state.blogs.singleBlogLoading
  );

  console.log(loadingBlog);
  const year = moment(blogData.created_at).format("D-MMMM-YYYY");

  useEffect(() => {
    dispatch(getSinglePostAction({ id, onSuccess, onError }));
  }, [dispatch, id]);

  const onSuccess = () => {};
  const onError = () => {};

  return (
    <GeneralContentWrapper>
      {loadingBlog && <ContentLoader />}
      {!loadingBlog && blogData && (
        <>
          <CustomTitle>{blogData?.title}</CustomTitle>
          <ReadMoreUserDetails>
            <ReadMoreSmallText>written on {year}</ReadMoreSmallText>
          </ReadMoreUserDetails>
          <ReadMoreContentText>{blogData?.description}</ReadMoreContentText>
        </>
      )}
    </GeneralContentWrapper>
  );
};

export default ReadMore;
