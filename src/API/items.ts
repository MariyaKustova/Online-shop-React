import { AxiosInstance } from "axios";
import { IItem } from "../models/item";

type IItemsResponse = Array<IItem>;

export class ApiItems {
    private axios: AxiosInstance;

    constructor(axios: AxiosInstance) {
        this.axios = axios;
    }

    getAll = () =>
        this.axios.get<IItemsResponse>(`/item`).then((response) => response.data);

    getById = (id: number) =>
        this.axios.get<IItem>(`/item/${id}`).then((response) => response.data);
}
