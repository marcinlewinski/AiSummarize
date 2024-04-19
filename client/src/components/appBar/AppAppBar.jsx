import * as React from 'react';

import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import {useNavigate} from "react-router-dom";
import AdbIcon from "@mui/icons-material/Adb";
import {alpha} from "@mui/material";
import {useAuth} from "../../providers/Auth/AuthProvider";

function AppAppBar() {
    const pages = ['Home', 'Pricing', 'Summarize'];
    const [open, setOpen] = React.useState(false);
    const navigate = useNavigate();
    const {logout} = useAuth();

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };


    const handleCloseNavMenu = (page) => {
        navigate(`/${page.toLowerCase()}`)
        console.log(page)
    };

    return (
        <Box style={{
            backgroundImage: `linear-gradient(#02294F, ${alpha('#090E10', 0.0)})`,
        }}>
            <AppBar
                position="fixed"
                sx={{
                    boxShadow: 0,
                    bgcolor: 'transparent',
                    mt: 2,
                }}
            >
                <Container maxWidth="lg">
                    <Toolbar
                        variant="regular"
                        sx={(theme) => ({
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            flexShrink: 0,
                            borderRadius: '999px',
                            bgcolor: 'rgba(0, 0, 0, 0.4)',
                            backdropFilter: 'blur(24px)',
                            maxHeight: 40,
                            border: '1px solid',
                            borderColor: 'divider',
                            boxShadow: '0 0 1px rgba(2, 31, 59, 0.7), 1px 1.5px 2px -1px rgba(2, 31, 59, 0.65), 4px 4px 12px -2.5px rgba(2, 31, 59, 0.65)'
                        })}
                    >
                        <Box
                            sx={{
                                flexGrow: 1,
                                display: 'flex',
                                alignItems: 'center',
                                ml: '-18px',
                                px: 0,
                            }}
                        >
                            <AdbIcon sx={{
                                marginLeft:"15px",
                                padding:'1px',
                                cursor: 'pointer',
                                display: { xs: 'none', md: 'flex' }, mr: 1 }} />

                            <Box sx={{ display: {xs: 'none', md: 'flex'}}}>
                                {pages.map((page) => (
                                    <MenuItem key={page} onClick={() => handleCloseNavMenu(page)}>
                                        <Typography textAlign="center">{page}</Typography>
                                    </MenuItem>
                                ))}
                            </Box>
                        </Box>
                        <Box
                            sx={{
                                display: {xs: 'none', md: 'flex'},
                                gap: 0.5,
                                alignItems: 'center',
                            }}
                        >
                            <Button
                                color="primary"
                                variant="contained"
                                size="small"
                                component="a"
                                onClick={logout}
                            >
                                Logout
                            </Button>
                        </Box>
                        <Box sx={{display: {sm: '', md: 'none'}}}>
                            <Button
                                variant="text"
                                color="primary"
                                aria-label="menu"
                                onClick={toggleDrawer(true)}
                                sx={{minWidth: '30px', p: '4px'}}
                            >
                                <MenuIcon/>
                            </Button>
                            <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
                                <Box
                                    sx={{
                                        minWidth: '60dvw',
                                        p: 2,
                                        backgroundColor: 'background.paper',
                                        flexGrow: 1,
                                    }}
                                >
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'end',
                                            flexGrow: 1,
                                        }}
                                    >
                                    </Box>
                                    {pages.map((page) => (
                                        <MenuItem key={page} onClick={() => handleCloseNavMenu(page)}>
                                            {page}
                                        </MenuItem>
                                    ))}
                                    <Divider/>
                                    <MenuItem>
                                        <Button
                                            color="primary"
                                            variant="contained"
                                            component="a"
                                            href="/material-ui/getting-started/templates/sign-up/"
                                            target="_blank"
                                            sx={{width: '100%'}}
                                        >
                                            Logout
                                        </Button>
                                    </MenuItem>
                                </Box>
                            </Drawer>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </Box>
    );
}

export default AppAppBar;