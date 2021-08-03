import React, { FC } from "react";

interface AppProps {
  title: string;
}

const App: FC<AppProps> = ({ title, subtitle }) => {
  return (
    <>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
    </>
  );
};

export default App;
