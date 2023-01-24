import { Quake } from "./quake";

export interface QuakesState {
    isLoading: boolean;
    quakes: Quake[];
    error: string | null;
}