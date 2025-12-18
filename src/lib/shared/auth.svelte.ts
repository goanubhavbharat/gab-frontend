import { writable } from "svelte/store";

export let authStorage = writable({
    firstName: "Guest",
    loggedIn: false,
});