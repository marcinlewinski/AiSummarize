import * as React from 'react';
import {alpha} from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import {NavLink} from "react-router-dom";

export default function Home() {
    return (
        <Box
            id="hero"
            sx={() => ({
                width: '100%',
                backgroundImage: `linear-gradient(#02294F, ${alpha('#090E10', 0.0)})`,
                backgroundSize: '100% 20%',
                backgroundRepeat: 'no-repeat',
            })}
        >
            <Container
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    pt: {xs: 14, sm: 20},
                    pb: {xs: 8, sm: 12},
                }}
            >
                <Stack spacing={2} useFlexGap sx={{width: {xs: '100%', sm: '70%'}}}>
                    <Typography
                        component="h1"
                        variant="h1"
                        sx={{
                            display: 'flex',
                            flexDirection: {xs: 'column', md: 'row'},
                            alignSelf: 'center',
                            textAlign: 'center',
                        }}
                    >
                        Discover &nbsp;
                        <Typography
                            component="span"
                            variant="h1"
                            sx={{
                                color: 'primary.light',
                            }}
                        >
                            AiSummarize
                        </Typography>
                    </Typography>
                    <Typography variant="body1" textAlign="center" color="text.secondary">
                        An innovative AI-powered platform that generates quick and accurate summaries of lengthy
                        texts,<br/>saving you time and boosting productivity. <br/>
                        Experience how easily you can grasp essential information with our technology - try it now for
                        free
                    </Typography>
                    <Stack
                        direction={{xs: 'column', sm: 'row'}}
                        alignSelf="center"
                        spacing={1}
                        useFlexGap
                        sx={{pt: 2, width: {xs: '100%', sm: 'auto'}}}
                    >
                        <NavLink to={'/summarize'}>
                            <Button
                                variant="contained"
                                color="primary"
                            >
                                Start now
                            </Button>
                        </NavLink>
                    </Stack>
                    <Typography variant="caption" textAlign="center" sx={{opacity: 0.8}}>
                        This project is licensed under the &nbsp;
                        <Link href="https://mit-license.org" color="primary">
                            MIT License
                        </Link>
                    </Typography>
                </Stack>
            </Container>
        </Box>
    );
}