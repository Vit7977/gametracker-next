export interface UserGamePlatform {
  id?: number;
  user: number;
  game_platform: number;
  status?: "lista de desejos" | "jogando" | "zerado" | "100%" | "replay";
  nota?: number;
  ranking?: number;
  adicionado_em: string;
}
