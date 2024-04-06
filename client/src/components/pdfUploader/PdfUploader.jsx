import Dropzone from "react-dropzone";
import {Cloud} from "@mui/icons-material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {InputLabel} from "@mui/material";

export const PdfUploader = ({handleDrop, handleClose}) => {
    const isSubscribed = false;

    const isFileValid = (file) => {
        const maxSizeAllowed = isSubscribed ? 16 * 1024 * 1024 : 4 * 1024 * 1024;
        const allowedTypes = ["application/pdf"];
        return file && allowedTypes.includes(file.type) && file.size <= maxSizeAllowed;
    }

    const handleDropInterval = (acceptedFile) => {
        const file = acceptedFile[0];
        if (isFileValid(file)) {
            handleDrop(acceptedFile);
            handleClose();
        } else {
            console.error("Invalid file. Please upload a PDF file up to 4 MB.");
        }

    }


    return (
        <Dropzone
            multiple={false}
            onDrop={handleDropInterval}
        >
            {({getRootProps, getInputProps, acceptedFiles}) => (
                <Box
                    {...getRootProps()}
                    sx={{
                        border: acceptedFiles.length > 0 ? '2px solid #4caf50' : '1px dashed #033363',
                        height: 200,
                        margin: 4,
                        borderRadius: 4,
                        '&:hover': {
                            border: '1px dashed #064079',
                            boxShadow: `0 0 24px #064079`,

                        },
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            height: '100%',
                            width: '100%',
                        }}
                    >
                        <InputLabel
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: '100%',
                                height: '100%',
                                borderRadius: 4,
                                cursor: 'pointer',
                                backgroundColor: 'background.default',
                                '&:hover': {
                                    backgroundColor: 'action.drop',


                                },
                            }}
                            htmlFor='dropzone-file'
                        >
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    paddingTop: 5,
                                    paddingBottom: 6,
                                }}
                            >
                                <Cloud sx={{
                                    mb: 2
                                }}/>
                                <Box
                                    sx={{
                                        fontSize: '0.875rem',
                                        color: acceptedFiles.length > 0 ? "success.dark" : "grey.300",
                                        marginButton: 2,
                                    }}
                                >
                                    <Typography
                                        variant="body1"
                                        fontWeight="bold"
                                    >
                                        Click to upload
                                    </Typography>
                                    or drag and drop
                                </Box>
                                <Typography
                                    variant="body2"
                                    sx={{
                                        fontSize: '0.625rem',
                                    }}
                                >
                                    PDF (up to {isSubscribed ? "16" : "4"}MB)
                                </Typography>
                                {acceptedFiles && acceptedFiles[0] ? (
                                    <Box sx={{marginTop: 2}}>
                                        <Typography variant="body2" sx={{color: "black"}}>
                                            {acceptedFiles[0].name}
                                        </Typography>
                                    </Box>
                                ) : null}
                            </Box>
                        </InputLabel>
                    </Box>
                </Box>
            )}
        </Dropzone>
    );
};
