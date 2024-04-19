import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import List from "@mui/material/List";
import {scrollbarStyles} from "../../Theme";
import FilePresentIcon from '@mui/icons-material/FilePresent';
import {UploadButton} from "../pdfUploader/UploadButton";

const items = [
    {
        title: 'Lorem',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec turpis eget sapien consequat vestibulum. Suspendisse potenti. Integer vitae justo.',
    },
    {
        title: 'Nam interdum',
        description:'Nam interdum, lacus nec placerat efficitur, turpis quam sagittis eros, a pulvinar ipsum dui ac justo. ',
    },
    {
        title: 'Fusce',
        description:'Fusce auctor lacinia lorem, non vehicula nisi. Vestibulum id metus nec odio consectetur congue.',
    },
    {
        title: 'Cras',
        description:'Cras aliquam malesuada augue, sed posuere risus finibus sit amet. Integer tempus erat nisi, eu efficitur urna aliquet in.',
    },
    {
        title: 'Nulla',
        description:'Nulla nec convallis quam. Etiam non metus lacinia, vehicula nunc nec, mattis purus.',
    },

];

export default function Summarize() {
    const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);

    const handleItemClick = (index) => {
        setSelectedItemIndex(index);
    };

    const selectedFeature = items[selectedItemIndex];

    return (
        <Container id="features" sx={{py: {xs: 8, sm: 16}}}>
            <Grid container spacing={6}>
                <Grid item xs={12} md={6}>
                    <div sx={{mb:20}}>
                        <UploadButton></UploadButton>
                    </div>

                    <Box
                        component={Card}
                        variant="outlined"
                        sx={{
                            display: {xs: 'auto', sm: 'none'},
                            mt: 4,
                        }}
                    >
                        <Box
                            sx={{
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                minHeight: 280,
                            }}
                        />
                        <Box sx={{px: 2, pb: 2}}>
                            <Typography color="text.primary" variant="body2" fontWeight="bold">
                                {selectedFeature.title}
                            </Typography>
                            <Typography color="text.secondary" variant="body2" sx={{my: 0.5}}>
                                {selectedFeature.description}
                            </Typography>
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            height: '500px',
                            overflowY: 'auto',
                            width: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            ...scrollbarStyles
                        }}
                    >
                        {items.map(({title, description}, index) => (
                            <List
                                key={index}
                                variant="outlined"
                                component={Button}
                                onClick={() => handleItemClick(index)}
                                sx={{
                                    p: 3,
                                    height: 'fit-content',
                                    width: '100%',
                                    background: 'none',
                                    backgroundColor: selectedItemIndex === index ? 'action.selected' : undefined,
                                    borderColor:selectedItemIndex === index ? 'primary.dark' : 'grey.800',
                                    mb: '10px',
                                }}
                            >
                                <Box
                                    sx={{
                                        width: '100%',
                                        display: 'flex',
                                        textAlign: 'left',
                                        flexDirection: {xs: 'column', md: 'row'},
                                        alignItems: {md: 'center'},
                                        gap: 2.5,
                                    }}
                                >
                                    <Box
                                        sx={{
                                            color:  selectedItemIndex === index ? 'primary.main' : 'grey.700',
                                        }}
                                    >
                                        <FilePresentIcon></FilePresentIcon>
                                    </Box>
                                    <Box sx={{textTransform: 'none'}}>
                                        <Typography
                                            color="text.primary"
                                            variant="body2"
                                            fontWeight="bold"
                                        >
                                            {title}
                                        </Typography>
                                        <Typography
                                            color="text.secondary"
                                            variant="body2"
                                            sx={{my: 0.5}}
                                        >
                                            {description}
                                        </Typography>
                                    </Box>
                                </Box>
                            </List>
                        ))}
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Card variant="outlined"
                          sx={{
                              height: '100%',
                              width: '100%',
                              minHeight: 500,
                              display: {xs: 'none', sm: 'flex'},
                          }}
                    >
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            pt: {xs: 7, sm: 5},
                            pl: 2,
                            pb: { xs: 2, sm: 4 },
                            ml: { xs: 2, sm: 1 },
                            pr: 2,
                        }}>
                            <Box
                                sx={{
                                    width: {xs: '100%', sm: '100%'},
                                    height: '500px',
                                    overflowY: 'auto',
                                    ...scrollbarStyles
                                }}>
                                <Typography variant="body2" color="text.secondary">
                                    {items[selectedItemIndex].description}
                                </Typography>
                            </Box>
                        </Box>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    );
};
