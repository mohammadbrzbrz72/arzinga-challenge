"use client";

import { useEffect, useState } from "react";

export function useSetInterval(refreshTime = 5000, clearTime = 30000) {
  const [isInterval, setIsInterval] = useState({ secondTime: 0, state: false });

  useEffect(() => {
    let _clearTimeout: any;
    const Interval = setInterval(() => {
      setIsInterval((data) => ({
        secondTime: data.secondTime + refreshTime / 1000,
        state: !data.state,
      }));
    }, refreshTime);

    if (clearTime != 0) {
      _clearTimeout = setTimeout(() => {
        clearInterval(Interval);
      }, clearTime + 2);
    }
    return () => {
      clearInterval(Interval);
      if (!!_clearTimeout) clearTimeout(_clearTimeout);
    };
  }, []);

  return isInterval;
}
