import { api } from "./api";

export const getPlatform = async () => {
    return api("/platform", {
        method: "GET",
    })
}