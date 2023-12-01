import React from "react";

const STATUS = ["pending", "in-process", "delivery", "delivered"];
const STATUS_COLOR = ["yellow", "blue", "purple", "green"];

export interface IBadges {
  status: 0 | 1 | 2 | 3;
}

export function Badges({ status }: IBadges) {
  return (
    <span
      className="py-3 px-8 rounded-[20px]"
      style={{
        background: STATUS_COLOR[status],
        color: "black",
      }}
    >
      {STATUS[status]}
    </span>
  );
}

Badges.status = STATUS;
