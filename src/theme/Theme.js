/* eslint-disable no-unused-vars */
import { createTheme } from "@mui/material/styles";

export const getDesignTokens = (mode) => ({
    palette: {
        mode, 
        ...(mode === 'light'
        ? {
            background: {
                default: '#f4f6f8',
                paper: '#fff'
            },
        }
        : {
            background: {
                default: '#121212',
                paper: '#1e1e1e'
            },
        }),
    },
});