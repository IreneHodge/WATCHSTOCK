import React, { FC } from "react";
import { SampleData } from "../../sampleData";
import AddToWatchList from "./AddToWatchList";

interface AppProps {
  title: string;
  subtitle: string;
}

const App: FC<AppProps> = ({ title, subtitle }) => {
  console.log(SampleData);
  return (
    <>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
      <AddToWatchList />
    </>
  );
};

export default App;
