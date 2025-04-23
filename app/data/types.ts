{/* Defines the data types for the warband data */}

export type Unit = {
    id: string;
    name: string;
    cost: number;
    type: string;
};

export type Warband = {
    id: string;
    name: string;
    units: Unit[];
}