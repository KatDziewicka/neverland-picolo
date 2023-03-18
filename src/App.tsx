import React from "react";
import "./App.css";
import { Prompt } from "./components/prompt";
import Airtable from "airtable";

// eslint-disable-next-line
interface PromptRecord {
  fields: { Prompt: string };
}

var base = new Airtable({
  apiKey:
    "patxJAheQLScdh7Rw.e9736efe5569d24c3f4d7517890877c873ac3a2ee5a1a975db90263b9c743f62",
}).base("app9cX0FJtk3FkpBi");

let response: any[] = [];

base("Table 1")
  .select({
    // Selecting the first 3 records in Grid view:
    maxRecords: 3,
    view: "Grid view",
  })
  .eachPage(
    function page(records, fetchNextPage) {
      // This function (`page`) will get called for each page of records.

      records.forEach(function (record) {
        console.log("Retrieved", record.get("Prompt"));
        response.push(record);
      });

      // To fetch the next page of records, call `fetchNextPage`.
      // If there are more records, `page` will get called again.
      // If there are no more records, `done` will get called.
      fetchNextPage();
    },
    function done(err) {
      if (err) {
        console.error(err);
        return;
      }
    }
  );

const stringResponse = (): string[] => {
  console.log(response);
  const prompts = response.filter((item) => item satisfies PromptRecord);
  console.log(prompts.map((p) => p.fields.Prompt));
  return prompts.map((p) => p.fields.Prompt);
};

const App = () => {
  return <Prompt prompt={stringResponse()[1]} />;
};

export default App;
