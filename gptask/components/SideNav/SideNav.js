import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { CalendarPicker } from '@mui/x-date-pickers/CalendarPicker';

// don't change without modifying css "container" class too (in globals.css)
const drawerWidth = 350;

export default function SideNav({ lists, onListSelect }) {
    return (
        <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar>
          Hello, World!
        </Toolbar>
        <Divider />
        <List>
          {lists.map((text) => (
            <ListItem key={text} disablePadding onClick={() => onListSelect(text)}>
              <ListItemButton>
                <ListItemIcon>
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <CalendarPicker onChange={() => alert('hello')}></CalendarPicker>
        </LocalizationProvider>
      </Drawer>
    );
}