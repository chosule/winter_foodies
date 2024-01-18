import { useQuery } from "@tanstack/react-query";
import styled from "@emotion/styled";
import getPosts from "../../api/getpost"



export async function getStaticProps() {
    const posts = await getPosts();
    return { props: { posts } }
  }

const PostsPage = (props) => {
    const { data ,isLoading} = useQuery({
        queryKey: ['posts'],
        queryFn: getPosts,
        initialData: props.posts,
      })
 

  if (isLoading || !data) return <div>is Loading.. </div>;

  return (
    <StyledFlex>
      <div>
        <h2 className="text-lg text-center font-bold mb-6">
          React Query SSR 적용
        </h2>
        <ul>
          {data?.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      </div>
     
    </StyledFlex>
  );
};

const StyledFlex = styled.div`
  display: flex;
`;
export default PostsPage;