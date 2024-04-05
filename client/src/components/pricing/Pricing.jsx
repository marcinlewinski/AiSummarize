import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';

const tiers = [
    {
        title: 'Free',
        price: '0',
        description: [
            '4 MB size of PDF file',
            'Help center access',
            'Email support',
            '30x PDF storage per day',
        ],
        buttonText: 'Start now',
        buttonVariant: 'outlined',
    },
    {
        title: 'Professional',
        price: '10',
        description: [
            '16 MB size of PDF file',
            'Help center access',
            'Phone & email support',
            '99x PDF storage per day',
        ],
        buttonText: 'Buy now',
        buttonVariant: 'outlined',
    },
];

export default function Pricing() {
    return (
        <Container
            sx={{
                pt: {xs: 20, sm: 12},
                pb: {xs: 10, sm: 16},
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: {xs: 5, sm: 6},
            }}
        >
            <Grid container spacing={3} alignItems="center" justifyContent="center">
                {tiers.map((tier) => (
                    <Grid
                        item
                        key={tier.title}
                        xs={12}
                        sm={12}
                        md={4}
                    >
                        <Card
                            sx={{
                                mt: 4,
                                p: 2,
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 4,
                                border: tier.title === 'Professional' ? '1px solid' : undefined,
                                borderColor:
                                    tier.title === 'Professional' ? 'primary.main' : undefined,
                                background:
                                    tier.title === 'Professional'
                                        ? 'linear-gradient(#033363, #021F3B)'
                                        : undefined,
                            }}
                        >
                            <CardContent>
                                <Box
                                    sx={{
                                        mb: 1,
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        color: tier.title === 'Professional' ? 'grey.100' : '',
                                    }}
                                >
                                    <Typography component="h3" variant="h6">
                                        {tier.title}
                                    </Typography>
                                </Box>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'baseline',
                                        color: tier.title === 'Professional' ? 'grey.50' : undefined,
                                    }}
                                >
                                    <Typography component="h3" variant="h2">
                                        ${tier.price}
                                    </Typography>
                                    <Typography component="h3" variant="h6">
                                        &nbsp; per month
                                    </Typography>
                                </Box>
                                <Divider
                                    sx={{
                                        my: 2,
                                        opacity: 0.2,
                                        borderColor: 'grey.500',
                                    }}
                                />
                                {tier.description.map((line) => (
                                    <Box
                                        key={line}
                                        sx={{
                                            py: 1,
                                            display: 'flex',
                                            gap: 1.5,
                                            alignItems: 'center',
                                        }}
                                    >
                                        <CheckCircleRoundedIcon
                                            sx={{
                                                width: 20,
                                                color:
                                                    tier.title === 'Professional'
                                                        ? 'primary.light'
                                                        : 'primary.main',
                                            }}
                                        />
                                        <Typography
                                            component="text"
                                            variant="subtitle2"
                                            sx={{
                                                color:
                                                    tier.title === 'Professional' ? 'grey.200' : undefined,
                                            }}
                                        >
                                            {line}
                                        </Typography>
                                    </Box>
                                ))}
                            </CardContent>
                            <CardActions>
                                <Button
                                    fullWidth
                                    variant={tier.buttonVariant}
                                    component="a"
                                    href="/home"
                                    target="_blank"
                                >
                                    {tier.buttonText}
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}