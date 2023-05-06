import { ContextType, PropsWithChildren, useMemo, useState } from "react";
import { GameContext } from "./game-context";
import { Record, FieldSet } from "airtable";

const GameContextProvider = ({ children }: PropsWithChildren<unknown>) => {
  const [playersList, setPlayersList] = useState<string[]>([]);
  const [gamePrompts, setGamePrompts] = useState<readonly Record<FieldSet>[]>(
    []
  );
  const [round, setRound] = useState(0);

  const value: ContextType<typeof GameContext> = useMemo(
    () => ({
      players: playersList,
      setPlayers: setPlayersList,
      gamePrompts,
      setGamePrompts,
      round,
      setRound,
    }),
    [gamePrompts, playersList, round]
  );

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
};

export default GameContextProvider;
