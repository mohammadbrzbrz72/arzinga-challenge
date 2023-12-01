import React from "react";

import { BasicTabs } from "@/components";
import ProductsTabContent from "./ProductsTabContent";
import OrderProductContent from "./OrderProductContent";

export default function HomeScreen() {
  return (
    <div className="pt-20">
      <BasicTabs
        defaultIndexTab={0}
        tabsData={[
          {
            label: "Products",
            Content: ProductsTabContent,
          },
          {
            label: "Orders",
            Content: OrderProductContent,
            disabled: true,
          },
        ]}
      />
    </div>
  );
}
