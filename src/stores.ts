import { writable } from "svelte/store";

export const info = writable({
    img: "",
    title: "",
    techs: [],
    overview: "",
});