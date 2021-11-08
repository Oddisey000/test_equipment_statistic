import React from "react";

import AutocompleteSearchBox from "./autocomplete-search/autocomplete.search.component";
import DatepickerContainer from "./datepicker-container/datepicker.container.component";
import SelectEquipment from "./select-component/select.component";

import "./body.component.scss";

const BodyComponent = () => {
  return (
    <div id="app-body">
      <div className="search_parameters">
        <AutocompleteSearchBox />
        <SelectEquipment />
      </div>
      <DatepickerContainer />
    </div>
  );
};

export default BodyComponent;