export interface IGiftBox {
    id?: string | number;
    srcImage?: string;
    nameBox: string;
    detailBox: string;
    buttonDetail?: string;
    price: number;
    TransportationMethod: number[];
}

export enum ETransportationMethod {
    NONE = 0,
    CRATE = 1,
    SHIPPING = 2,
}

export enum EMethod {
    NONE = "None",
    CRATE = "Crate",
    SHIPPING = "Shipping",
}
export enum ETypeFormat {
    Comma = ",",
    Dot = ".",
}
