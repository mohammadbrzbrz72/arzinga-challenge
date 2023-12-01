import { useAppSelector } from "../hooks";

export default function useOrderSelector() {
  const order = useAppSelector((state) => state.user);

  return order;
}
