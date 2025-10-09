import { createTheme, ThemeProvider } from "@mui/material";
import AdminNavbar from '../../components/admin/AdminNavbar'
import { useMemo, useState } from "react";
import { getDesignTokens } from "../../theme/Theme";

const AdminDashboard = () => {
  const [mode, setMode ] = useState('light');
  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode])

  function toggleColorMode(){
    setMode(prev => (prev === 'light' ? 'dark' : 'light'))
  };

  return (
    <>
    <ThemeProvider theme={theme}>
      <AdminNavbar toggleColorMode={toggleColorMode}/>
    </ThemeProvider>
    </>
  );
};

export default AdminDashboard;
