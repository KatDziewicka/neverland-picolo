import { AirtableBase } from "airtable/lib/airtable_base";
import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Prompt = ({ base }: { base: AirtableBase }) => {
  const [prompt, setPrompt] = useState("");
  const [componentState, updateComponentState] = useState<Object>();
  // TODO: see if this useCallback is necessary?
  const forceUpdate = useCallback(() => updateComponentState({}), []);

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
          console.log(records);
          const randomRecord =
            records[Math.floor(Math.random() * records.length)]._rawJson.fields
              .prompt;
          setPrompt(randomRecord);
        }
      });
  }, [base, componentState]);

  return (
    <div className="App-header">
      <p>{prompt}</p>
      <button onClick={forceUpdate}>NEXT</button>
      <Link to="/home">
        <button>GO BACK</button>
      </Link>
    </div>
  );
};

export default Prompt;
