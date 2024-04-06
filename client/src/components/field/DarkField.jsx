import * as React from 'react';
import Box from "@mui/material/Box";
import {alpha} from "@mui/material";
import Container from "@mui/material/Container";

function DarkField() {
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

                <Box
                    id="image"
                    sx={(theme) => ({
                        mt: {xs: 8, sm: 10},
                        alignSelf: 'center',
                        height: {xs: 200, sm: 700},
                        width: '100%',
                        backgroundSize: 'cover',
                        borderRadius: '10px',
                        outline: '1px solid',
                        outlineColor: alpha('#9CCCFC', 0.1),
                        boxShadow: `0 0 24px 12px ${alpha('#033363', 0.2)}`,
                    })}

                >
                </Box>
            </Container>
        </Box>
    );
}

export default DarkField();