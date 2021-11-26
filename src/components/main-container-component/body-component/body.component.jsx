import React from "react";
import Box from '@mui/material/Box';
import "./body.component.scss";

import AutocompleteSearchBox from "./autocomplete-search/autocomplete.search.component";
import DatepickerComponent from "./datepicker-component/datepicker.component";
import SelectEquipment from "./select-component/select.component";
import SearchComponent from "./search-component/search.component";
import IconButton from "@material-ui/core/IconButton";
import Close from "@material-ui/icons/Close";

const BodyComponent = () => {
  const datepickerParams = {
    datePickerOne: {
      name: "Початкова дата",
      id: "start_date"
    },
    datePickerTwo: {
      name: "Кінцева дата",
      id: "end_date"
    }
  };
  return (
    <div id="app-body">
      <div id="datepicker_container">
        <DatepickerComponent { ...datepickerParams.datePickerOne } />
        <Box sx={{ mx: 1 }}></Box>
        <DatepickerComponent { ...datepickerParams.datePickerTwo } />
      </div>
      <div className="search_parameters">
        <AutocompleteSearchBox />
        <SelectEquipment />
        <SearchComponent />
      </div>
    </div>
  );
};

export default BodyComponent;