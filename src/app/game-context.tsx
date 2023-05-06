import { createContext, Dispatch, SetStateAction } from "react";
import { Record, FieldSet } from "airtable";

export interface GameContextValue {
  players: string[];
  setPlayers?: Dispatch<SetStateAction<string[]>>;
  gamePrompts: readonly Record<FieldSet>[];
  setGamePrompts?: Dispatch<SetStateAction<readonly Record<FieldSet>[]>>;
  round: number;
  setRound?: Dispatch<SetStateAction<number>>;
}

export const GameContext = createContext<GameContextValue>({
  players: [],
  gamePrompts: [],
  round: 0,
});
