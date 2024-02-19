import {Button, Dialog, DialogContent} from "@mui/material";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import React, {useState} from "react";
import Box from "@mui/material/Box";
import {PdfUploader} from "./PdfUploader";
import {httpClient} from "../../hooks/httpClient";

export const UploadButton = () => {
    const [isOpen, setIsOpen] = useState(false);
    const handleClick = () => {
        setIsOpen(true);
    };
    const handleClose = () => {
        setIsOpen(false);
    };

    const handleDrop = async (acceptedFiles) => {
        if (acceptedFiles.length > 0) {
            const file = acceptedFiles[0];

            if (file.type === "application/pdf") {

                const formData = new FormData();
                formData.append("pdfFile", file);

                try {
                    const response = await httpClient.post("/api/upload/pdf", formData, {
                        headers: {
                            "Content-Type": "multipart/form-data",
                        },
                    });

                    console.log("File uploaded successfully:", response.data);
                } catch (error) {
                    console.error("Error uploading file:", error);

                }
            } else {
                console.error("Invalid file type. Please upload a PDF file.");
            }
        }
    };
    return (
        <Box>
            <Button variant="contained" onClick={handleClick} sx={{width: '100%'}}>
                <UploadFileIcon sx={{margin: '10px'}}/>
                Upload new file
            </Button>
            <Dialog open={isOpen} onClose={handleClose}>
                <DialogContent sx={{
                    minHeight: '300px',
                    minWidth: '500px',
                }}>
                    <PdfUploader handleDrop={handleDrop}></PdfUploader>
                </DialogContent>
            </Dialog>
        </Box>
    )
}