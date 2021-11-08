import React from "react";

import AutocompleteSearchBox from "./autocomplete-search/autocomplete.search.component";
import DatepickerComponent from "./datepicker-component/datepicker.component";

const BodyComponent = () => {
  return (
    <div id="app-body">
      <AutocompleteSearchBox />
      <DatepickerComponent />
    </div>
  );
};

export default BodyComponent;