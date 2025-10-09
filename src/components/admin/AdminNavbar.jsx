// components/AdminNavbar.jsx
import React, { useState } from 'react';
import {
  AppBar,
  Box,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Switch,
  Toolbar,
  Typography,
  useTheme,
} from '@mui/material';
import {
  MdDashboard,
  MdSettings,
  MdLogout,
  MdMenu,
  MdLightMode,
  MdDarkMode,
} from 'react-icons/md';
import { FaBuilding } from 'react-icons/fa';

const drawerWidth = 240;

const AdminNavbar = ({ toggleColorMode }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar sx={{ justifyContent: 'center' }}>
        <FaBuilding size={28} />
        <Typography variant="h6" sx={{ ml: 1 }}>
          MyCompany
        </Typography>
      </Toolbar>
      <Divider />
      <List>
        {[
          { text: 'Dashboard', icon: <MdDashboard /> },
          { text: 'Settings', icon: <MdSettings /> },
          { text: 'Logout', icon: <MdLogout /> },
        ].map(({ text, icon }) => (
          <ListItem button key={text}>
            <ListItemIcon sx={{ color: 'inherit' }}>{icon}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          backgroundColor: theme.palette.background.paper,
          color: theme.palette.text.primary,
          boxShadow: 'none',
          borderBottom: `1px solid ${theme.palette.divider}`,
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <IconButton
            color="inherit"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ display: { sm: 'none' } }}
          >
            <MdMenu />
          </IconButton>

          <Typography variant="h6" noWrap>
            Admin Dashboard
          </Typography>

          <IconButton color="inherit" onClick={toggleColorMode}>
            {theme.palette.mode === 'dark' ? <MdLightMode /> : <MdDarkMode />}
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Drawer for sidebar */}
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="admin navigation"
      >
        {/* Mobile drawer */}
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>

        {/* Desktop drawer */}
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              boxSizing: 'border-box',
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>

      {/* Main Content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          mt: 8,
          backgroundColor: theme.palette.background.default,
          minHeight: '100vh',
        }}
      >
        <Typography variant="h4">Welcome to Admin Panel</Typography>
        <Typography variant="body1">Here’s your dashboard content.</Typography>
      </Box>
    </Box>
  );
};

export default AdminNavbar;
