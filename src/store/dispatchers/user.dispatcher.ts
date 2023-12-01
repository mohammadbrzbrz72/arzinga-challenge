import { useCallback } from "react";

import { useAppDispatch } from "../hooks";
import { userSlice } from "../features/user-slice";

export default function useOrderDispatch() {
  const dispatch = useAppDispatch();

  const dispatchAddCoordinates = useCallback(
    (props: { lat: number; lng: number }) => {
      dispatch(userSlice.actions.addCoordinates(props));
    },
    []
  );
  const dispatchRemoveCoordinates = useCallback(() => {
    dispatch(userSlice.actions.removeCoordinates());
  }, []);

  return {
    dispatchAddCoordinates,
    dispatchRemoveCoordinates,
  };
}
