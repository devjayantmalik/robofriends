import React, { useState } from "react";
import { connect } from "react-redux";
import {
  searchById,
  searchByName,
  searchByEmail,
  clearSearch,
} from "../store/search/actions";

const Searchbar = ({
  searchById,
  searchByName,
  searchByEmail,
  clearSearch,
}) => {
  const [searchText, setSearchText] = useState("");

  const handleOnChange = (e) => {
    const value = e.target.value;
    setSearchText(value);

    if (value.length === 0) {
      clearSearch();
      return;
    }

    if (Number.isInteger(value)) {
      searchById(parseInt(value));
      return;
    }

    if (searchText.includes("@")) {
      searchByEmail(value);
      return;
    }

    searchByName(value);
  };
  return (
    <div className="searchbar-container">
      <input
        type="text"
        value={searchText}
        onChange={handleOnChange}
        placeholder="Search for robots"
      />
    </div>
  );
};

export default connect(null, {
  searchById,
  searchByName,
  searchByEmail,
  clearSearch,
})(Searchbar);
