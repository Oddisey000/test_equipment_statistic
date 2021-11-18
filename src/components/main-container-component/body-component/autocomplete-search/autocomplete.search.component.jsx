import React, { useEffect } from 'react';
import { connect } from "react-redux";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

import { getOrdersFromDB } from "../../../../redux/app-reducer/app-reducer.actions";

const AutocompleteSearchBox = ({ appReducer, getOrdersFromDB }) => {

  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={appReducer.ordersToSelect}
      sx={{ width: 280 }}
      renderInput={(params) => <TextField {...params} label="№ ордеру" />}
    />
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = ['The Shawshank Redemption', 'The Godfather','The Godfather: Part II'];

const mapStateToProps = (state) => {
  return {
    appReducer: { ...state.appReducer }
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getOrdersFromDB: dispatch(getOrdersFromDB())
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(AutocompleteSearchBox);