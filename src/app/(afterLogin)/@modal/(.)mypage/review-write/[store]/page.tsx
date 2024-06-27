import ReviewModal from "@/app/(afterLogin)/_component/ReviewModal";
import Modal from "@/app/_component/Modal";

type Props = {
  params: {
    store: string;
  };
};
export default function page({ params }: Props) {
  const store = params.store;
  return (
    <Modal className="p-3">
      <ReviewModal store={store} />
    </Modal>
  );
}
