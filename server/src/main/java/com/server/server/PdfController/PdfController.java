package com.server.server.PdfController;

import com.server.server.exceptions.PdfBuildAndSaveException;
import com.server.server.model.request.PdfUploadRequest;
import com.server.server.service.pdfService.PdfService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import javax.validation.Valid;
import java.util.UUID;

@RestController("/api/pdf")
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
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Internal server error!");
        }
    }
}
