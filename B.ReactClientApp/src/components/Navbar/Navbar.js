import React from 'react';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { mainNavbarItems } from './NavbarItems';
import { navbarStyles } from './styles';
import { useNavigate } from "react-router-dom";


const Navbar = () => {
    const navigate = useNavigate();

    return(
    <React.Fragment>
        {/* <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Clipped drawer
          </Typography>
        </Toolbar>
      </AppBar> */}
      <Drawer
          sx={navbarStyles.drawer}
          variant="permanent"
          anchor="left"
      >
        <Toolbar />
        <Divider />
        <List>
          {mainNavbarItems.map((item, index) => (
            <ListItem
                button
                key={item.id}
                onClick={() => navigate(item.route)}
            >
              <ListItemIcon
                sx={navbarStyles.icons}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText
                sx={navbarStyles.text}
                primary={item.label}
              />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </React.Fragment>
   
    )
}

export default Navbar;