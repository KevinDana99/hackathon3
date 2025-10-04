export type Month = "enero" | "febrero" | "marzo" | "abril" | "mayo" | "junio" | "julio" | "agosto" | "septiembre" | "octubre" | "noviembre" | "diciembre";

export type DataPoint = {
    data: number;
    month: Month;
    year: number;
}

export type DataType = "WS50M" | "WD50M" | "WS2M" | "T2M" | "PRECTOTCORR"

export type DataArray = {
    type: DataType;
    count: number;
    data: DataPoint[];
}

export interface DataRequestObject {
    parameters: DataType,
    start: number,
    end: number,
    latitude: number,
    longitude: number
}
