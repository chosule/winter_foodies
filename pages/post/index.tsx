import { useQuery } from "@tanstack/react-query";
import styled from "@emotion/styled";
import getPosts from "../../api/getpost";
import { deleteUndefined } from "@/hooks/useDeleteUndefined";

const removeUndefinedForNextJsSerializing = <T,>(props: T): T =>
  Object.fromEntries(
    Object.entries(props).filter(([, value]) => value !== undefined)
  ) as T;

export async function getStaticProps() {
  const posts = await getPosts();
  const data = JSON.stringify(posts);
  return {
    props: removeUndefinedForNextJsSerializing({
      data,
    }),
  };
}

const PostsPage = (props) => {
  const { data, isLoading } = useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
    initialData: props.posts,
  });

  if (isLoading || !data) return <div>is Loading.. </div>;

  return <div>{JSON.stringify(data)}</div>;
};

const StyledFlex = styled.div`
  display: flex;
`;
export default PostsPage;
