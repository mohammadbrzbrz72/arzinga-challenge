export type IChangeTab = (i: number) => void;
export type IHandleDisabled = (prevData: boolean[]) => boolean[];
export type IContent = (props: {
  changeTab: IChangeTab;
  handleDisabled: (callback: IHandleDisabled) => void;
}) => ReactNode;
interface ITabsData {
  label: string;
  disabled?: boolean;
  Content: IContent;
}
export interface IBasicTabs {
  tabsData: ITabsData[];
  defaultIndexTab?: number;
}
