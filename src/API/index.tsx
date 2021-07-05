import axios, { AxiosInstance } from "axios";
import {ApiItems} from "./items"

class Api {
    private axios: AxiosInstance;
    items: ApiItems;

    constructor(axios: AxiosInstance) {
        this.axios = axios;
        this.items = new ApiItems(axios);
    }
}

let API: Api;

const createAPI = (headers = {}) => {
    API = new Api(
        axios.create({
            withCredentials: false,
            baseURL: "http://localhost:3006",
            headers,
        })
    );
};

createAPI({});

export {API, createAPI};

export enum HTTP_STATUS {
    AppError = 100, 
    ServerError = 500,
    Access = 200,
    Error = 400,
    Unauthorized = 401,
    Forbidden = 403,
    BadRequest = 400,
    NotFound = 404,
}
