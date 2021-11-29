import React from 'react';
import { connect } from "react-redux";
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import ToggleButton from '@mui/material/ToggleButton';
import SearchIcon from '@mui/icons-material/Search';

import "./search.component.scss";

import DataTableComponent from "../datatable-component/datatable.component";

import { getDataFromDB } from "../../../../redux/app-reducer/app-reducer.actions";

const SearchComponent = ({ appReducer, getDataFromDB }) => {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    PrepareDataForTable()
    setState({ ...state, [anchor]: open })
  };

  const PrepareDataForTable = () => {
    const orderInfo = document.getElementById("combo-box-demo").value;
    const equipmentInfo = document.getElementById("equipment-simple-select").innerText;
    let startDate = document.getElementById("start_date").value
    let endDate = document.getElementById("end_date").value

    if (orderInfo) {
      if (orderInfo && equipmentInfo.length > 2) {
        getDataFromDB(`${appReducer.API_url}requestdata?order=${orderInfo}&equipment=${equipmentInfo}`)
      } else {
        getDataFromDB(`${appReducer.API_url}requestdata?order=${orderInfo}&equipment=`)
      }
    }

    if (startDate && endDate) {
      if (equipmentInfo.length > 2) {
        startDate = `${startDate.substring(startDate.length - 4, startDate.length)}/${startDate.substring(3, 5)}/${startDate.substring(0, 2)}`
        endDate = `${endDate.substring(endDate.length - 4, endDate.length)}/${endDate.substring(3, 5)}/${endDate.substring(0, 2)}`
        getDataFromDB(`${appReducer.API_url}requestdata?startdate=${startDate}&enddate=${endDate}&equipment=${equipmentInfo}`)
      } else {
        startDate = `${startDate.substring(startDate.length - 4, startDate.length)}/${startDate.substring(3, 5)}/${startDate.substring(0, 2)}`
        endDate = `${endDate.substring(endDate.length - 4, endDate.length)}/${endDate.substring(3, 5)}/${endDate.substring(0, 2)}`
        getDataFromDB(`${appReducer.API_url}requestdata?startdate=${startDate}&enddate=${endDate}&equipment`)
      }
    }
  }

  let list = (anchor) => (
    <div>
      <DataTableComponent {...appReducer} />
    </div>
  );

  return (
    <div id="search_icon_button">
      {['top'].map((anchor) => (
        <React.Fragment key={anchor}>
          <ToggleButton
            value="Пошук"
            onClick={toggleDrawer(anchor, true)}
            //onFocus={PrepareDataForTable}
          >
            <SearchIcon />
          </ToggleButton>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    appReducer: { ...state.appReducer }
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getDataFromDB: (request) => dispatch(getDataFromDB(request))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchComponent);
