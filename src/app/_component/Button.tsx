type Props = {
  onClickHandler?: () => void;
  children: React.ReactNode;
};
export default function Button({ onClickHandler, children }: Props) {
  return <button onClick={onClickHandler}>{children}</button>;
}
