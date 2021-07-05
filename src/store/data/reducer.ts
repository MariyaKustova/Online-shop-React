import { IItem } from "../../models/item";
import { DataAction, IDataActionTypes } from "./types";

const initialState = {
    items: null as Array<IItem> | null,
    item: null as IItem | null,
};
export type IDataState = typeof initialState;

export const dataReducer = (
    state = initialState,
    action: DataAction
): IDataState => {
    switch (action.type) {
        case IDataActionTypes.DATA__SET_ITEMS:
            return { ...state, items: action.payload };
        case IDataActionTypes.DATA__SET_ITEM:
            return { ...state, item: action.payload };
        default:
            return state;
    }
};
