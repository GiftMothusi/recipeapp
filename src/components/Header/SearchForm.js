import React from "react";
import { BsSearch } from "react-icons/bs";

import "./Header.scss";

const SearchForm = () => {
  return (
    <form className="search-form flex align-center" onSubmit={{}}>
      <input
        type="text"
        className="form-control-input text-dark-gray fs-15"
        placeholder="find recipes..."
        onChange={{}}
      />
      <button
        type="submit"
        className="form-submit-btn text-white text-uppercase fs-14"
      >
        <BsSearch className="btn-icon" size={20} />
      </button>
    </form>
  );
};

export default SearchForm;
