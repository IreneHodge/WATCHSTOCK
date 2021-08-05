import React, { FC } from "react";
import styled from "styled-components";

interface SearchBarProps {
  search: String;
  setSearch: Function;
  companySearch: Function;
  className?: string;
}

const SearchBarStyle = styled.div`
  .search-bar {
    margin-left: 30px;
    display: inline;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1), 0 2px 4px 1px rgba(0, 0, 0, 0.18);
  }

  .wrap:hover .search-bar {
    box-shadow: 0px 4px 2px -2px rgb(136, 208, 219);
    background-color: rgba(136, 208, 219, 0.2);
  }

  .search-bar input {
    margin-left: 5px;
    width: 80%;
    border: none;
    height: 80px;
    font-size: 1.5rem;
  }

  .search {
    width: 70%;
    border: 3px solid black;
    border-right: none;
    padding: 5px;
    border-radius: 5px 0 0 5px;
    outline: none;
    color: black;
    background: none;
  }

  .searchButton {
    height: 35px;
    background: #1c304a;
    text-align: center;
    color: #fff;
    border-radius: 0 5px 5px 0;
    cursor: pointer;
    font-size: 1.5rem;
  }
`;
const SearchTerm = styled.div``;

const SearchButton = styled.div``;

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
    <SearchBarStyle>
      <form
        onSubmit={(e) => {
          submit(e);
        }}
        className="search-bar"
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
        <button type="submit" name="tickerSearch" className="searchButton">
          Ticker Search
        </button>
      </form>
    </SearchBarStyle>
  );
};

export default SearchBar;
