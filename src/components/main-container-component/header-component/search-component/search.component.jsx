import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import SearchIcon from '@mui/icons-material/Search';

const SearchComponent = () => {
  return (
    <ToggleButton
      value="Пошук"
    >
      <SearchIcon />
    </ToggleButton>
  );
}

export default SearchComponent;
