import React, { useCallback, useState } from 'react';
import { Box, Button, Typography, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import {FiberDvr} from "@mui/icons-material";
const PdfUploader = () => {
    const [files, setFiles] = useState([]);
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(true);
    };

    const handleClose = () => {
        setIsOpen(false);
    };

    const handleDrop = useCallback(
        (event) => {
            event.preventDefault();
            const droppedFiles = Array.from(event.dataTransfer.files);
            setFiles((prevFiles) => [...prevFiles, ...droppedFiles]);
        },
        [setFiles]
    );

    const handleDragOver = useCallback((event) => {
        event.preventDefault();
    }, []);

    const handleRemoveFile = useCallback(
        (index) => {
            setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
        },
        [setFiles]
    );

    return (
        <Box>
            <Button variant="contained" onClick={handleClick} sx={{
                width:'100%'
            }}>
                <UploadFileIcon sx={{
                    margin:'10px'
                }}></UploadFileIcon>

                Upload new file
            </Button>
            <Dialog open={isOpen} onClose={handleClose}
            >
                <DialogTitle>Drop Zone</DialogTitle>
                <DialogContent >
                    <Box
                        sx={{
                            border: '2px dashed #ccc',
                            borderRadius: '8px',
                            p: 2,
                            textAlign: 'center',
                            height: '200px',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                        onDrop={handleDrop}
                        onDragOver={handleDragOver}
                    >
                        <Typography variant="h6" sx={{ mb: 2 }}>
                            Drag & Drop your files here
                        </Typography>
                        <Button variant="contained" component="label">
                            Browse
                            <input type="file" multiple hidden />
                        </Button>
                        <Box sx={{ mt: 2 }}>
                            {files.map((file, index) => (
                                <Box key={file.name} sx={{ display: 'flex', alignItems: 'center' }}>
                                    <Typography variant="body1" sx={{ mr: 1 }}>
                                        {file.name}
                                    </Typography>
                                    <Button
                                        variant="outlined"
                                        color="error"
                                        onClick={() => handleRemoveFile(index)}
                                    >
                                        Remove
                                    </Button>
                                </Box>
                            ))}
                        </Box>
                    </Box>
                </DialogContent>
                <DialogActions>

                    <Button onClick={handleClose} variant="contained">
                        Close
                    </Button>
                    <Button onClick={handleClose} variant="contained">
                        Upload
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
};

export default PdfUploader;
