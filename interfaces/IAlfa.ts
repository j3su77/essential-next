// Generated by https://quicktype.io

export interface Alfas {
    alfas: AlfasClass;
}

export interface AlfasClass {
    tipo:    String; 
}

export interface alfa {
    tipo:           string;
    descripcion:    string;
    numero_estados: number;
    estados:       Estados;
}

export interface Estados {
    identif:            Array<string[]>;
    "con Solución ":    Array<string[]>;
    "con  Establecido": Array<string[]>;
    Viab:               Array<string[]>;
    Trata:              Array<string[]>;
    "con beneficio":    Array<string[]>;
}

