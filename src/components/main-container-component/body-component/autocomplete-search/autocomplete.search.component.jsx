import React  from 'react';
import { connect } from "react-redux";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

import { getOrdersFromDB, getEquipmentList } from "../../../../redux/app-reducer/app-reducer.actions";

const AutocompleteSearchBox = ({ appReducer, getOrdersFromDB, getEquipmentList }) => {

  const DisableDateInputs = (e) => {
    const groupToChange = document.getElementsByClassName("datepicker_input_block");
    let condition;
    e.target.innerText ? condition = "none" : condition = "block";
    for (var i = 0; i < groupToChange.length; i++) {
      groupToChange[i].style.display = condition;
    }
  }

  const TestFunction = (e) => {
    if (e.target.value) {
      getEquipmentList(`${appReducer.API_url}getequipment?order=${e.target.value}`)
    }
  }

  return (
    <Autocomplete
      onBlur={TestFunction}
      onChange={DisableDateInputs}
      disablePortal
      id="combo-box-demo"
      options={appReducer.ordersToSelect}
      sx={{ width: 280 }}
      renderInput={(params) => <TextField {...params} label="№ ордеру" />}
    />
  );
}

const mapStateToProps = (state) => {
  return {
    appReducer: { ...state.appReducer }
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getOrdersFromDB: dispatch(getOrdersFromDB()),
    getEquipmentList: (request) => dispatch(getEquipmentList(request))
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(AutocompleteSearchBox);