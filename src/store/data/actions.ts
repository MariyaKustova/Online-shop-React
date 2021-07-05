import { IItem } from "../../models/item";
import {DataAction, IDataActionTypes} from "./types";

/**
 * Записать ITEMS в store
 * @param items
 */
export const data__setItems = (items: Array<IItem> | null): DataAction => ({
  type: IDataActionTypes.DATA__SET_ITEMS,
  payload: items,
});
/**
 * Записать ITEM в store
 * @param item
 */
export const data__setItem = (item: IItem | null): DataAction => ({
  type: IDataActionTypes.DATA__SET_ITEM,
  payload: item,
});