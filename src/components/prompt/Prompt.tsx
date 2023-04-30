import { AirtableBase } from "airtable/lib/airtable_base";
import { useEffect, useState } from "react";

const Prompt = ({ base }: { base: AirtableBase }) => {
  const [prompt, setPrompt] = useState("");

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
              .Prompt;
          setPrompt(randomRecord);
        }
      });
  }, [base]);

  return <p>{prompt}</p>;
};

export default Prompt;
