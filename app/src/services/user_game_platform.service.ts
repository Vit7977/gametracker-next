"use server";
import { UserGamePlatform } from "../types/UserGamePlatform";
import { api } from "./api";

export const createUserGamePlatform = async (data: UserGamePlatform) => {
  return api("/user.game.platform", {
    method: "POST",
    body: JSON.stringify(data),
  });
};
