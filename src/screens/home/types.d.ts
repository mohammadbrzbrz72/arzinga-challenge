import type { IChangeTab, IHandleDisabled } from "@/components/Tabs/tabs";

export interface IContentFC {
  changeTab?: IChangeTab;
  handleDisabled?: (callback: IHandleDisabled) => void;
}
