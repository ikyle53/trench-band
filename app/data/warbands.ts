{/* This contains all the warband stats, abilities, etc. */}
import { Warband } from './types';

export const warbands: Warband[] = [
    {
        id: "iron-host",
        name: "Iron Host",
        units: [
        { id: "ih-01", name: "Iron Pioneer", cost: 100, type: "infantry" },
        { id: "ih-02", name: "Steel Reaper", cost: 150, type: "heavy"},
        ]
    }
]