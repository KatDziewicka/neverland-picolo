import { AirtableBase } from "airtable/lib/airtable_base";
import { GameContext } from "app/game-context";
import { useContext, useEffect } from "react";
import { Link, Navigate } from "react-router-dom";
import { shuffleStrings } from "utils";

const Prompt = ({ base }: { base: AirtableBase }) => {
  const { players, gamePrompts, setGamePrompts, round, setRound } =
    useContext(GameContext);

  useEffect(() => {
    base("Table 1")
      .select({
        view: "Grid view",
      })
      .all((err, records) => {
        if (err) {
          console.error(err);
          return;
        }
        if (records && records.length) {
          setGamePrompts &&
            setGamePrompts(
              records
                .filter((record) =>
                  record._rawJson.fields.players_involved.every(
                    (p: string) =>
                      players.includes(p) || p === "everyone" || p === "random"
                  )
                )
                .slice(0, 25)
            );
        }
      });
  }, [base, players, setGamePrompts]);

  const shuffledPrompts = shuffleStrings(
    gamePrompts.map((el) => el._rawJson.fields.prompt)
  );

  return (
    <div className="App-header">
      <p>
        {shuffledPrompts[round] &&
          shuffledPrompts[round].replace(
            "[random]",
            shuffleStrings(players)[0]
          )}
      </p>
      <button onClick={() => setRound && setRound(round + 1)}>NEXT</button>
      {round === shuffledPrompts.length && <Navigate to="/game-over" replace />}
      <Link to="/home">
        <button>GO BACK</button>
      </Link>
    </div>
  );
};

export default Prompt;
