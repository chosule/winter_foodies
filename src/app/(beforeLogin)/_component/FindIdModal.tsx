type Props = {
  userId: string;
};
export default function FindIdModal({ userId }: Props) {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <p className="font-medium whitespace-pre-line text-center">
        <p>회원님의 아이디는</p>
        <span className="text-color-orange">{userId}</span>
        <span> 입니다.</span>
      </p>
    </div>
  );
}
