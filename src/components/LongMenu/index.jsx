import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const options = [
  'Adicionar a uma playlist',
];

const ITEM_HEIGHT = 48;

export default function LongMenu({isShown, setShowModal}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (option) => {
    if(option === 'Adicionar a uma playlist'){
      setShowModal(true)
    }

    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
        style={{display: isShown ? "flex" : "none" }}
      >
        <MoreVertIcon style={{ color: "var(--grey-0)"}}/>
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '24ch',
          },
        }}
      >
        {options.map((option) => (
          <MenuItem key={option} selected={option === 'Adicionar a uma playlist'} onClick={() => handleClose(option)} style={{color: "var(--grey-3)"}}>
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
