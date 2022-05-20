import { AxiosInstance } from "axios";
import { IItem } from "../models/item";

type IDataFilterResponse = Array<IItem>;

export class ApiDataFilter {
    private axios: AxiosInstance;

    constructor(axios: AxiosInstance) {
        this.axios = axios;
    }

    getAll = (data: string) =>
        this.axios.post<IDataFilterResponse>(`/dataFilter`, data).then((response) => response.data);
}