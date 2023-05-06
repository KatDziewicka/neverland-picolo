import { AirtableBase } from "airtable/lib/airtable_base";
import { GameContext } from "app/game-context";
import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
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
              records.filter((record) =>
                record._rawJson.fields.players_involved.every((p: string) =>
                  players.includes(p)
                )
              )
            );
        }
      });
  }, [base, players, setGamePrompts]);

  const shuffledPrompts = shuffleStrings(
    gamePrompts.map((el) => el._rawJson.fields.prompt)
  );

  return (
    <div className="App-header">
      <p>{shuffledPrompts[round]}</p>
      <button onClick={() => setRound && setRound(round + 1)}>NEXT</button>
      <Link to="/home">
        <button>GO BACK</button>
      </Link>
    </div>
  );
};

export default Prompt;
