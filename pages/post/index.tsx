import { useQuery } from "@tanstack/react-query";
import styled from "@emotion/styled";
import getPosts from "../../api/getpost";
import { deleteUndefined } from "@/hooks/useDeleteUndefined";


export async function getServerSideProps() {
  const posts = await getPosts();
  const data = JSON.stringify(posts);
  return {
    props:{posts}
  };
}

const PostsPage = (props) => {
  const { data, isLoading ,isError} = useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
    initialData: props.posts,
  });


  if (isLoading || !data) return <div>is Loading.. </div>;
  if (isError) {
    return <div>에러</div>;
  }
//   return <div>{data.data.map((item) => item.storeName)}</div>;
return (
    <>
        {data && ( 
            <>
                <div>{data?.data?.map((item) => item.storeName)}</div>
            </>
        )}
    </>
)
};

const StyledFlex = styled.div`
  display: flex;
`;
export default PostsPage;
