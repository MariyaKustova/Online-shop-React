import { IItem } from "../../models/item";

export enum IDataActionTypes {
  DATA__SET_ITEMS = "[DATA] SET_ITEMS",
  DATA__SET_ITEM = "[DATA] SET_ITEM",
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

// Общий тип Action
export type DataAction =
  | SetItemssAction
  | SetItemAction