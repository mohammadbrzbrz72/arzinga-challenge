import { useState, useEffect } from "react";
import { useSetInterval } from "@/hooks";

import { Badges, IBadges } from "@/components";

export default function CheckStatus({ callback }: { callback: Function }) {
  const { secondTime } = useSetInterval(5000, 30000);

  const status = () => {
    if (secondTime < 16) {
      return 0;
    } else return (secondTime - 15) / 5;
  };

  useEffect(() => {
    if (status() === 3) {
      callback();
    }
  }, [secondTime]);

  console.log("status:", status());

  return <Badges status={status() as 0 | 2 | 1 | 3} />;
}
