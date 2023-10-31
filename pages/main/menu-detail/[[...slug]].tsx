import { useRouter } from "next/router";

const testPage = () => {
  const router = useRouter();
  const { slug } = router.query;

  console.log("router query", router.query);
  const firstSegment = slug && slug[1];
  console.log("fiest", firstSegment);
  return <div>페이지 수정</div>;
};

export default testPage;
