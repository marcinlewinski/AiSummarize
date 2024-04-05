import * as React from 'react';

import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import AppAppBar from '../../components/appBar/AppAppBar';
import theme from '../../Theme';
import {alpha} from "@mui/material";


export default function LandingPage({children}) {

    return (
        <ThemeProvider theme={createTheme(theme('dark'))}>
            <CssBaseline/>
            <AppAppBar/>
            <Box
                sx={{
                    backgroundImage: `linear-gradient(#02294F, ${alpha('#090E10', 0.0)})`,
                    backgroundSize: '100% 20%',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                {children}
            </Box>
        </ThemeProvider>
    );
}