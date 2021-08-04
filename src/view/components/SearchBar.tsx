import React, { FC } from "react";

interface SearchBarProps {
  search: String;
  setSearch: Function;
}

const SearchBar: FC<SearchBarProps> = ({ search, setSearch }) => {
  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearch(e);
  };
  return (
    <form
      onSubmit={(e) => {
        submit(e);
        console.log(search);
      }}
    >
      <input
        type="text"
        className="search"
        name="search"
        onChange={(e) => {
          setSearch(e.target.value);
          console.log(e.target.value);
        }}
        placeholder="Search Company Ticker Here..."
      />
      <button type="submit" name="tickerSearch">
        Ticker Search
      </button>
    </form>
  );
};

export default SearchBar;
