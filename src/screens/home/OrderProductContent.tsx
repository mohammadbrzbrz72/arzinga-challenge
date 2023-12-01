"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";

import { BasicModal, TitleLabel, OrderCard } from "@/components";
import useOrderSelector from "@/store/selectors/order.selector";
import useUserSelector from "@/store/selectors/user.selector";
import useUserDispatch from "@/store/dispatchers/user.dispatcher";
import useOrderDispatch from "@/store/dispatchers/order.dispatcher";
import type { IContentFC } from "./types";
import { Button } from "@mui/material";
import { CATEGORIES_LIST, PICTURES_NAME } from "@/constants/fake_data";
import CheckStatus from "./CheckStatus";

export default function OrderProduct({
  changeTab,
  handleDisabled,
}: IContentFC) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { dispatchRemoveOrder } = useOrderDispatch();
  const { dispatchRemoveCoordinates } = useUserDispatch();
  const orderListData = useOrderSelector();
  const orderUserData = useUserSelector();
  const theme = useTheme();
  const switchModalState = () => setIsModalOpen((prevState) => !prevState);

  const handleAction = () => {
    dispatchRemoveOrder();
    dispatchRemoveCoordinates();
    handleDisabled?.(() => [false, true]);
    changeTab?.(0);
  };

  const productsList = Object.entries(orderListData)
    .map(([CategoryIndex, values]) => {
      const categoryNum = Number(CategoryIndex);
      return values.map((productId) => {
        return (
          <OrderCard
            key={`${CategoryIndex} ${productId}`}
            src={`/products/${PICTURES_NAME[categoryNum]}`}
            price={12.5}
            productName={CATEGORIES_LIST[categoryNum].label}
            productId={productId}
          />
        );
      });
    })
    .flat();

  return (
    <div className="mt-10">
      <div className="flex flex-col gap-8">{productsList}</div>

      <div className="mx-auto max-w-[500px] mt-28 pt-10 border-t border-gray-300">
        <Typography
          className="text-center"
          gutterBottom
          variant="h6"
          style={{ fontWeight: 700 }}
        >
          Your Information
        </Typography>

        <div>
          <TitleLabel title="Full Name" label={orderUserData.userName} />
          <TitleLabel
            title="Address"
            label={`Lat: ${orderUserData.lat} , Lng: ${orderUserData.lng}`}
          />

          <div className="flex justify-end items-center gap-4 mt-8">
            <Button
              className="bg-gray-300"
              variant="contained"
              size="small"
              onClick={handleAction}
              style={{
                background: theme.palette.grey[300],
                color: theme.palette.grey[600],
              }}
            >
              Cancel
            </Button>

            <Button
              variant="contained"
              size="small"
              color="primary"
              onClick={() => {
                switchModalState();
              }}
            >
              Purchase
            </Button>
          </div>
        </div>
      </div>

      <BasicModal open={isModalOpen} hideClose>
        <div className="flex justify-center">
          <Image
            src="/products/happy.avif"
            width={500}
            height={500}
            alt="happy for purchasing"
          />
        </div>
        <Typography
          className="text-center"
          gutterBottom
          variant="h6"
          style={{ fontWeight: 700 }}
        >
          Congratulations, your purchasing is completed
        </Typography>
        <div className="my-5 flex justify-center ">
          <CheckStatus
            callback={() => {
              switchModalState();
              handleAction();
            }}
          />
        </div>
        <div className="flex justify-center mt-10">
          <Button
            variant="contained"
            size="small"
            color="primary"
            onClick={() => {
              switchModalState();
              handleAction();
            }}
            style={{ width: 200 }}
          >
            Ok
          </Button>
        </div>
      </BasicModal>
    </div>
  );
}
