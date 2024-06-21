import ReviewModal from "../../../_component/ReviewModal";
import Modal from "@/app/_component/Modal";

type Props = {
  params: {
    store: string;
  };
};
export default function page({ params }: Props) {
  const store = params.store;
  return (
    <Modal>
      <ReviewModal store={store} />
    </Modal>
  );
}
