"use client";
import { useState, useMemo, useRef } from "react";
import dynamic from "next/dynamic";
import { Button, Typography } from "@mui/material";

import { ProductCard, BasicModal } from "@/components";
import useOrderDispatch from "@/store/dispatchers/order.dispatcher";
import useUserDispatch from "@/store/dispatchers/user.dispatcher";
import useOrderSelector from "@/store/selectors/order.selector";
import { CATEGORIES_LIST, PICTURES_NAME } from "@/constants/fake_data";
import type { IContentFC } from "./types";

const DraggableMarkerMap = dynamic(
  () => import("@/components/Maps/DraggableMarkerMap"),
  {
    ssr: false,
  }
);

export default function ProductsTabContent({
  changeTab,
  handleDisabled,
}: IContentFC) {
  const { dispatchAddItemOrder, dispatchRemoveItemOrder } = useOrderDispatch();
  const { dispatchAddCoordinates } = useUserDispatch();
  const orderListData = useOrderSelector();

  const latLngDataId = useRef({
    lat: 0,
    lng: 0,
  });

  const [activeCategory, setActiveCategory] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const switchModalState = () => setIsModalOpen((prevState) => !prevState);

  const handleOrder = () => {
    dispatchAddCoordinates(latLngDataId.current);
    handleDisabled?.((_prevData) => {
      return [false, false];
    });
    switchModalState();
    changeTab?.(1);
  };

  // I memoize categories lists to prevent re-rendering after infinity scrolling at products card components( When it works with real data like rest api)
  const categories = useMemo(() => {
    return CATEGORIES_LIST.map(({ label, id }, index) => {
      const isActive = activeCategory === index;

      return (
        <Typography
          className={!isActive ? "cursor-pointer" : "default"}
          key={id}
          variant="body2"
          component="span"
          style={{
            color: isActive ? "#00d9a8" : "",
            fontWeight: isActive ? 700 : 400,
          }}
          onClick={() => {
            setActiveCategory(index);
          }}
        >
          {label}
        </Typography>
      );
    });
  }, [activeCategory]);

  return (
    <>
      <div className="flex gap-3 mt-10 ">
        <div className="min-w-[135px] flex flex-col gap-3 pr-6 mr-6 border-r border-gray-200">
          {categories}
        </div>
        <div className="relative">
          {!!Object.keys(orderListData).length && (
            <div className="flex justify-end py-4 fixed right-[10%] bottom-12 z-20">
              <Button
                className="fixed top-0 right-0"
                variant="contained"
                size="small"
                color="success"
                style={{
                  width: 120,
                }}
                onClick={switchModalState}
              >
                Next Step
              </Button>
            </div>
          )}
          <div className="grid grid-cols-4 gap-x-5 gap-y-10">
            {[...new Array(15)].map((_, index) => {
              const isOrder =
                String(activeCategory) in orderListData
                  ? orderListData[activeCategory].includes(index)
                  : false;

              return (
                <ProductCard
                  key={index}
                  isOrder={isOrder}
                  src={`/products/${PICTURES_NAME[activeCategory]}`}
                  title={CATEGORIES_LIST[activeCategory].label + " " + index}
                  onClick={() => {
                    // latLngDataId.current.product_id = index;

                    dispatchAddItemOrder({
                      id: activeCategory,
                      product_id: index,
                    });
                    // switchModalState();
                  }}
                  onCancel={() => {
                    dispatchRemoveItemOrder({
                      id: activeCategory,
                      product_id: index,
                    });
                  }}
                />
              );
            })}
          </div>
        </div>
        <BasicModal open={isModalOpen} onClose={switchModalState}>
          <Typography className="pb-2" variant="h6" component="h2">
            Select the delivery coordinates
          </Typography>
          <div
            style={{
              height: 400,
            }}
          >
            <DraggableMarkerMap
              getLatLng={({ lat, lng }) => {
                latLngDataId.current.lat = lat;
                latLngDataId.current.lng = lng;
              }}
            />
          </div>

          <div className="flex justify-end mt-10">
            <Button
              variant="contained"
              size="small"
              color="primary"
              onClick={handleOrder}
            >
              Order food
            </Button>
          </div>
        </BasicModal>
      </div>
    </>
  );
}
