import { useCallback } from "react";

import { useAppDispatch } from "../hooks";
import { orderSlice, IPayloadOrder } from "../features/order-slice";

export default function useOrderDispatch() {
  const dispatch = useAppDispatch();

  const dispatchAddItemOrder = useCallback((props: IPayloadOrder) => {
    dispatch(orderSlice.actions.addItemOrder(props));
  }, []);

  const dispatchRemoveItemOrder = useCallback((props: IPayloadOrder) => {
    dispatch(orderSlice.actions.removeItemOrder(props));
  }, []);

  const dispatchRemoveOrder = useCallback(() => {
    dispatch(orderSlice.actions.removeOrder());
  }, []);

  return { dispatchAddItemOrder, dispatchRemoveItemOrder, dispatchRemoveOrder };
}
