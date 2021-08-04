import React, { FC } from "react";

interface SearchBarProps {
  search: String;
  setSearch: Function;
  companySearch: Function;
}

const SearchBar: FC<SearchBarProps> = ({
  search,
  setSearch,
  companySearch,
}) => {
  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearch(e);
    companySearch();
  };
  return (
    <form
      onSubmit={(e) => {
        submit(e);
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
