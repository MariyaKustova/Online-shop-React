import { GetState } from "../index";
import {data__setItem, data__setItems} from "./actions";
import {API} from "../../API";


/**
 * Получили все элементы
 */
export const data__getItems = () => async (dispatch: any, getState: GetState) => {
  try {
    const items = await API.items.getAll();
    dispatch(data__setItems(items))
  }catch (e) {
    console.error("Ошибка при запросе...", e)
  }
};

/**
 * Получили элемент по его ID
 */
export const data__getItemById = (id: number) => async (dispatch: any, getState: GetState) => {
  dispatch(data__setItem(null))
  try {
    const item = await API.items.getById(id);
    dispatch(data__setItem(!!item ? item : null))
  }catch (e) {
    console.error("Ошибка при запросе...", e)
  }
};
