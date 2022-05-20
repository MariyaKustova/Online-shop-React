export interface IItem {
    id: string | number,
    name: string,
    description: string,
    info?: string,
    details?: string,
    like: boolean,
    picture:{
        path: string,
        alt: string
    },
    price: {
        value: number,
        currency: string
    }
}
