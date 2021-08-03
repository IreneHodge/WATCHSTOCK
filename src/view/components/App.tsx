import React, { FC } from "react";
import { SampleData } from "../../sampleData";

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
    </>
  );
};

export default App;
