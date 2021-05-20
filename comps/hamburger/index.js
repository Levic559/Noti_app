import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { useRouter } from 'next/router'



export default function Hamburger() {
  
  
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const router = useRouter()
  return (
    <div>
      <Button    aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}    style={{ fontSize: '24px'}}>
       Menu 
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
       
       
      >
        <MenuItem style={{ fontSize: '20px'}} onClick={()=>router.push('/home')}>Home</MenuItem>
        <MenuItem style={{ fontSize: '20px'}} onClick={()=>router.push('/features')}>Features</MenuItem>
        <MenuItem style={{ fontSize: '20px'}} onClick={()=>window.open('https://noti-app.vercel.app/')}>Download</MenuItem>
        <MenuItem style={{ fontSize: '20px'}} onClick={()=>router.push('/about')}>AboutUs</MenuItem>
      </Menu>
    </div>
  );
}