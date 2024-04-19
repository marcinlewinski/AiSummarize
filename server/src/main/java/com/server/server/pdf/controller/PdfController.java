package com.server.server.pdf.controller;

import com.server.server.exceptions.PdfBuildAndSaveException;
import com.server.server.pdf.model.request.PdfUploadRequest;
import com.server.server.pdf.service.PdfService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.UUID;

@RestController()
@RequestMapping("/api/pdf")

public class PdfController {
    private final PdfService pdfService;

    @Autowired
    public PdfController(PdfService pdfService) {
        this.pdfService = pdfService;
    }

    @PostMapping("/upload")
    public ResponseEntity<Object> uploadPdf(@Valid @ModelAttribute PdfUploadRequest pdfUploadRequest) {
        try {
            UUID id = pdfService.uploadPdf(pdfUploadRequest.getPdfFile().getBytes(), pdfUploadRequest.getFileName());
            return ResponseEntity.ok().body(id);

        } catch (PdfBuildAndSaveException e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error processing PDF: " + e.getMessage());
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Internal server error!" + e.getMessage());
        }
    }
    @GetMapping("/get")
    public ResponseEntity<Object> get() {
        return ResponseEntity.status(HttpStatus.OK).body("Success!");
    }
}
