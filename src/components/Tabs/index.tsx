"use client";
import { useMemo, useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

import type { IBasicTabs } from "./tabs";

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export function BasicTabs({ tabsData, defaultIndexTab = 0 }: IBasicTabs) {
  const [value, setValue] = useState(defaultIndexTab);
  const [disabledTabs, setDisabledTabs] = useState(
    tabsData.map((tab) => !!tab.disabled)
  );

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const activeTabContent = useMemo(() => {
    const { Content } = tabsData[value];

    return (
      <Content
        changeTab={setValue}
        handleDisabled={(callback) => {
          setDisabledTabs(callback);
        }}
      />
    );
  }, [value]);

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs value={value} onChange={handleChange} aria-label="market-place">
          {tabsData.map(({ label }, index) => {
            return (
              <Tab
                key={index}
                disabled={disabledTabs[index]}
                label={label}
                {...a11yProps(index)}
              />
            );
          })}
        </Tabs>
      </Box>
      {activeTabContent}
    </Box>
  );
}
