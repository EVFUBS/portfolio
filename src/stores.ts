import { writable } from "svelte/store";

export interface info {
    title: string;
    img: string;
    techs: string[];
    preview?: string;
    overview: string;
    challenges?: string;
}