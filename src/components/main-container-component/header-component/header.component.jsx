import React from "react";

import AutocompleteSearchBox from "./autocomplete-search/autocomplete.search.component";
import DatepickerContainer from "./datepicker-container/datepicker.container.component";
import SelectEquipment from "./select-component/select.component";
import SearchComponent from "./search-component/search.component";

import "./header.component.scss";

const HeaderComponent = () => {
  return (
    <div id="app-header">
      <div className="search_parameters">
        <AutocompleteSearchBox />
        <SelectEquipment />
        <SearchComponent />
      </div>
      <DatepickerContainer />
    </div>
  );
};

export default HeaderComponent;