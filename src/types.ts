export type Month = "enero" | "febrero" | "marzo" | "abril" | "mayo" | "junio" | "julio" | "agosto" | "septiembre" | "octubre" | "noviembre" | "diciembre";

export type DataPoint = {
    value: number;
    month: Month;
    year: number;
}

export type DataType = "WS50M" | "WD50M" | "WS2M" | "T2M" | "PRECTOTCORR"

export type DataArray = {
    type: DataType;
    data: DataPoint[];
}

export interface DataRequestObject {
    parameters: DataType,
    start: number, // año inicio
    end: number,   // año fin
    latitude: number,
    longitude: number
}
