import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

const ContentLoader = () => {
  return (
    <Stack spacing={3}>
      <Skeleton variant="text" sx={{ fontSize: "1rem", height: "70px" }} />
      <Skeleton variant="rectangular" width={"auto"} height={300} />
    </Stack>
  );
};

export default ContentLoader;
