"use client";

import { useQuery } from "@tanstack/react-query";
import { getPosts } from "@/context/app/posts/getPosts";
import styled from "@emotion/styled";

const PostsPage = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
  });

  const { data: otherData } = useQuery({
    queryKey: ["posts-2"],
    queryFn: getPosts,
  });

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
      <div>
        <h2 className="text-lg text-center font-bold mb-6">
          React Query SSR 적용 안함
        </h2>
        <ul>
          {otherData?.map((post) => (
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
