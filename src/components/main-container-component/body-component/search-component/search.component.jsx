import * as React from 'react';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import ToggleButton from '@mui/material/ToggleButton';
import SearchIcon from '@mui/icons-material/Search';

import "./search.component.scss";

import DataTableComponent from "../datatable-component/datatable.component";

const SearchComponent = () => {
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

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div>
      <DataTableComponent />
    </div>
  );

  return (
    <div id="search_icon_button">
      {['top'].map((anchor) => (
        <React.Fragment key={anchor}>
          <ToggleButton
            value="Пошук"
            onClick={toggleDrawer(anchor, true)}
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

export default SearchComponent;
