import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import SearchIcon from '@mui/icons-material/Search';
import axios from "axios";

const baseURL = "http://localhost:3200/";

const getDataFromDB = () => {
  axios.get(baseURL).then((response) => {
    console.log(response.data.recordset);
  })
};

const SearchComponent = () => {
  return (
    <ToggleButton
      value="Пошук"
      onClick={getDataFromDB}
    >
      <SearchIcon />
    </ToggleButton>
  );
}

export default SearchComponent;
