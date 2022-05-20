import { IItem } from "../../models/item";

export enum IDataActionTypes {
  DATA__SET_ITEMS = "[DATA] SET_ITEMS",
  DATA__SET_ITEM = "[DATA] SET_ITEM",
  DATA__SET_DATA_FILTER = "[DATA] SET_DATA_FILTER",
}

// Типы ActionCreators
interface SetItemssAction {
  type: IDataActionTypes.DATA__SET_ITEMS;
  payload: Array<IItem> | null;
}

interface SetItemAction {
  type: IDataActionTypes.DATA__SET_ITEM;
  payload: IItem | null;
}

interface SetDataFilterAction {
  type: IDataActionTypes.DATA__SET_DATA_FILTER;
  payload: Array<IItem> | null;
}

// Общий тип Action
export type DataAction =
  | SetItemssAction
  | SetItemAction
  | SetDataFilterAction