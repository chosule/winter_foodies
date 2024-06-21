import FindIdModal from "@/app/(beforeLogin)/_component/FindIdModal";
import Modal from "@/app/_component/Modal";

type Props = {
  params: {
    userId: string;
  };
};
export default function page({ params }: Props) {
  const { userId } = params;
  const decodeUserId = decodeURIComponent(userId);
  return (
    <Modal className="p-6">
      <FindIdModal userId={decodeUserId} />
    </Modal>
  );
}
