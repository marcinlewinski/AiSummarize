import {alpha} from '@mui/material/styles';

export const brand = {
    50: '#F0F7FF',
    100: '#CEE5FD',
    200: '#9CCCFC',
    300: '#55A6F6',
    400: '#0A66C2',
    500: '#0959AA',
    600: '#064079',
    700: '#033363',
    800: '#02294F',
    900: '#021F3B',
};

export const secondary = {
    50: '#F9F0FF',
    100: '#E9CEFD',
    200: '#D49CFC',
    300: '#B355F6',
    400: '#750AC2',
    500: '#6709AA',
    600: '#490679',
    700: '#3B0363',
    800: '#2F024F',
    900: '#23023B',
};

export const gray = {
    50: '#FBFCFE',
    100: '#EAF0F5',
    200: '#D6E2EB',
    300: '#BFCCD9',
    400: '#94A6B8',
    500: '#5B6B7C',
    600: '#4C5967',
    700: '#364049',
    800: '#131B20',
    900: '#090E10',
};

export const green = {
    50: '#F6FEF6',
    100: '#E3FBE3',
    200: '#C7F7C7',
    300: '#A1E8A1',
    400: '#51BC51',
    500: '#1F7A1F',
    600: '#136C13',
    700: '#0A470A',
    800: '#042F04',
    900: '#021D02',
};

const getDesignTokens = (mode) => ({
    palette: {
        mode,
        primary: {
            contrastText: brand[100],
            light: brand[300],
            main: brand[400],
            dark: brand[800],
        },
        secondary: {
            light: secondary[400],
            main: secondary[500],
            dark: secondary[900],
        },
        warning: {
            main: '#F7B538',
            dark: '#F79F00',
        },
        error: {
            light: '#D32F2F',
            main: '#D32F2F',
            dark: '#B22A2A',
        },
        success: {
            light: green[400],
            main: green[500],
            dark: green[700],

        },
        grey: {
            50: gray[50],
            100: gray[100],
            200: gray[200],
            300: gray[300],
            400: gray[400],
            500: gray[500],
            600: gray[600],
            700: gray[700],
            800: gray[800],
            900: gray[900],
        },
        divider: alpha(gray[600], 0.3),
        background: {
            default: gray[900],
            paper: gray[800],
        },
        text: {
            primary: '#fff',
            secondary: gray[400],
        },
        action: {
            selected: alpha(brand[800], 0.2),
            drop:alpha(gray[800], 1),
        },
    },

    typography: {
        fontFamily: ['"Inter", "sans-serif"'].join(','),

        h1: {
            fontSize: 60,
            fontWeight: 600,
            lineHeight: 78 / 70,
            letterSpacing: -0.2,
        },
        h2: {
            fontSize: 48,
            fontWeight: 600,
            lineHeight: 1.2,
        },
        h3: {
            fontSize: 42,
            lineHeight: 1.2,
        },
        h4: {
            fontSize: 36,
            fontWeight: 500,
            lineHeight: 1.5,
        },
        h5: {
            fontSize: 20,
            fontWeight: 600,
        },
        h6: {
            fontSize: 18,
        },
        subtitle1: {
            fontSize: 18,
        },
        subtitle2: {
            fontSize: 16,
        },
        body1: {
            fontWeight: 400,
            fontSize: 15,
        },
        body2: {
            fontWeight: 400,
            fontSize: 14,
        },
        caption: {
            fontWeight: 400,
            fontSize: 12,
        },
    },
});

export default function theme(mode) {
    return {
        ...getDesignTokens(mode),
        components: {
            MuiAccordion: {
                defaultProps: {
                    elevation: 0,
                    disableGutters: true,
                },
                styleOverrides: {
                    root: () => ({
                        padding: 8,
                        overflow: 'clip',
                        backgroundColor: gray[900],
                        border: '1px solid',
                        borderColor: gray[800],
                        ':before': {
                            backgroundColor: 'transparent',
                        },
                        '&:first-of-type': {
                            borderTopLeftRadius: 10,
                            borderTopRightRadius: 10,
                        },
                        '&:last-of-type': {
                            borderBottomLeftRadius: 10,
                            borderBottomRightRadius: 10,
                        },

                    }),
                },
            },
            MuiScrollbar: {
                styleOverrides: {
                    root: {
                        '&::-webkit-scrollbar': {
                            width: '8px',
                        },
                        '&::-webkit-scrollbar-thumb': {
                            backgroundColor: "red",
                            borderRadius: '4px',
                        },
                        '&::-webkit-scrollbar-track': {
                            backgroundColor: 'black',
                        },
                    },
                },
            },
            MuiAccordionSummary: {
                styleOverrides: {
                    root: ({theme}) => ({
                        border: 'none',
                        borderRadius: 8,
                        '&:hover': {backgroundColor: gray[800]},

                    }),
                },
            },
            MuiAccordionDetails: {
                styleOverrides: {
                    root: {mb: 20, border: 'none'},
                },
            },
            MuiToggleButtonGroup: {
                styleOverrides: {
                    root: () => ({
                        borderRadius: '10px',
                        boxShadow: `0 4px 16px ${alpha(brand[700], 0.5)}`,
                        '& .Mui-selected': {
                            color: '#fff',
                        },
                    }),
                },
            },
            MuiToggleButton: {
                styleOverrides: {
                    root: ({theme}) => ({
                        padding: '12px 16px',
                        textTransform: 'none',
                        borderRadius: '10px',
                        fontWeight: 500,
                        color: gray[400],
                        boxShadow: '0 4px 16px rgba(0, 0, 0, 0.5)',
                        '&.Mui-selected': {color: brand[300]},
                    }),
                },
            },
            MuiButtonBase: {
                defaultProps: {
                    disableTouchRipple: true,
                    disableRipple: true,
                },
                styleOverrides: {
                    root: {
                        boxSizing: 'border-box',
                        transition: 'all 100ms ease-in',
                        '&:focus-visible': {
                            outline: `3px solid ${alpha(brand[500], 0.5)}`,
                            outlineOffset: '2px',
                        },
                    },
                },
            },
            MuiButton: {
                styleOverrides: {
                    root: ({theme, ownerState}) => ({
                        boxSizing: 'border-box',
                        boxShadow: 'none',
                        borderRadius: '10px',
                        textTransform: 'none',
                        '&:active': {
                            transform: 'scale(0.98)',
                        },
                        ...(ownerState.size === 'small' && {
                            maxHeight: '32px',
                        }),
                        ...(ownerState.size === 'medium' && {
                            height: '40px',
                        }),
                        ...(ownerState.variant === 'contained' &&
                            ownerState.color === 'primary' && {
                                color: brand[50],
                                background: brand[500],
                                backgroundImage: `linear-gradient(to bottom, ${brand[400]}, ${brand[600]})`,
                                boxShadow: `inset 0 1px ${alpha(brand[300], 0.4)}`,
                                outline: `1px solid ${brand[700]}`,
                                '&:hover': {
                                    background: brand[400],
                                    backgroundImage: 'none',
                                    boxShadow: `0 0 0 1px  ${alpha(brand[300], 0.5)}`,
                                },
                            }),
                        ...(ownerState.variant === 'outlined' && {
                            backgroundColor: alpha(brand[600], 0.1),
                            borderColor: brand[700],
                            color: brand[300],
                            '&:hover': {
                                backgroundColor: alpha(brand[600], 0.3),
                                borderColor: brand[700],
                            },
                        }),
                        ...(ownerState.variant === 'text' && {
                            color: brand[300],
                            '&:hover': {
                                backgroundColor: alpha(brand[600], 0.3),
                                borderColor: brand[700],
                            },
                        }),

                    }),
                },
            },
            MuiCard: {
                styleOverrides: {
                    root: ({ownerState}) => ({
                        backgroundColor: alpha(gray[800], 0.6),
                        borderRadius: 10,
                        border: `1px solid ${alpha(gray[700], 0.3)}`,
                        boxShadow: 'none',
                        transition: 'background-color, border, 80ms ease',
                        ...(ownerState.variant === 'outlined' && {
                            background: `linear-gradient(to bottom, ${gray[900]}, ${alpha(
                                gray[800],
                                0.5,
                            )})`,
                            '&:hover': {
                                borderColor: brand[700],
                                boxShadow: `0 0 24px ${brand[800]}`,
                            },
                        }),
                    }),
                },
            },
            MuiChip: {
                styleOverrides: {
                    root: () => ({
                        alignSelf: 'center',
                        py: 1.5,
                        px: 0.5,
                        background: `linear-gradient(to bottom right, ${brand[700]}, ${brand[900]})`,
                        border: '1px solid',
                        borderColor: `${alpha(brand[500], 0.5)}`,
                        fontWeight: '600',
                        '&:hover': {
                            backgroundColor: brand[600],
                        },
                        '&:focus-visible': {
                            borderColor: brand[200],
                            backgroundColor: brand[600],
                        },
                        '& .MuiChip-label': {
                            color: brand[200],
                        },
                        '& .MuiChip-icon': {
                            color: brand[200],
                        },
                    }),
                },
            },
            MuiDivider: {
                styleOverrides: {
                    root: ({theme}) => ({
                        borderColor: `${alpha(gray[700], 0.4)}`,
                    }),
                },
            },
            MuiLink: {
                defaultProps: {
                    underline: 'none',
                },
                styleOverrides: {
                    root: ({theme}) => ({
                        color: brand[200],
                        fontWeight: 500,
                        position: 'relative',
                        textDecoration: 'none',
                        '&::before': {
                            content: '""',
                            position: 'absolute',
                            width: 0,
                            height: '1px',
                            bottom: 0,
                            left: 0,
                            backgroundColor: brand[200],
                            opacity: 0.7,
                            transition: 'width 0.3s ease, opacity 0.3s ease',
                        },
                        '&:hover::before': {
                            width: '100%',
                            opacity: 1,
                        },
                    }),
                },
            },
            MuiMenuItem: {
                styleOverrides: {
                    root: () => ({
                        borderRadius: '99px',
                        color: gray[300],
                        fontWeight: 500,
                    }),
                },
            },
            MuiPaper: {
                styleOverrides: {
                    root: () => ({
                        backgroundImage: 'none',
                        backgroundColor: alpha(gray[900], 0.6),
                    }),
                },
            },

            MuiSwitch: {
                styleOverrides: {
                    root: () => ({
                        boxSizing: 'border-box',
                        width: 36,
                        height: 24,
                        padding: 0,
                        transition: 'background-color 100ms ease-in',
                        '&:hover': {
                            '& .MuiSwitch-track': {
                                backgroundColor: brand[600],
                            },
                        },
                        '& .MuiSwitch-switchBase': {
                            '&.Mui-checked': {
                                transform: 'translateX(13px)',
                            },
                        },
                        '& .MuiSwitch-thumb': {
                            boxShadow: '0 0 2px 2px rgba(0, 0, 0, 0.2)',
                            backgroundColor: '#FFF',
                            width: 16,
                            height: 16,
                            margin: 2,
                        },
                    }),
                    switchBase: {
                        height: 24,
                        width: 24,
                        padding: 0,
                        color: '#fff',
                        '&.Mui-checked + .MuiSwitch-track': {
                            opacity: 1,
                        },
                    },
                },
            },
            MuiTextField: {
                styleOverrides: {
                    root: () => ({
                        '& label .Mui-focused': {
                            color: 'white',
                        },
                        '& .MuiInputBase-input': {
                            boxSizing: 'border-box',
                            '&::placeholder': {
                                opacity: 0.7,
                            },
                        },
                        '& .MuiOutlinedInput-root': {
                            boxSizing: 'border-box',
                            minWidth: 280,
                            minHeight: 40,
                            height: '100%',
                            borderRadius: '10px',
                            border: '1px solid',
                            borderColor: gray[600],
                            transition: 'border-color 120ms ease-in',
                            '& fieldset': {
                                border: 'none',
                                boxShadow: ' 0px 2px 4px rgba(0, 0, 0, 0.4)',
                                background: `${alpha(gray[800], 0.4)}`,
                            },
                            '&:hover': {
                                borderColor: brand[300],
                            },
                            '&.Mui-focused': {
                                borderColor: brand[400],
                                outline: '4px solid',
                                outlineColor: alpha(brand[500], 0.5),
                            },
                        },
                    }),
                },
            },
        },
    };
}
export const scrollbarStyles = {
    pr: 1,
    '&::-webkit-scrollbar': {
        width: '8px',
    },
    '&::-webkit-scrollbar-thumb': {
        backgroundColor: brand[500],
        borderRadius: '4px',
    },
    '&::-webkit-scrollbar-track': {
        backgroundColor: 'black',
    },
};