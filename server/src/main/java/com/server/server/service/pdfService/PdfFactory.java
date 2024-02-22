package com.server.server.service.pdfService;

import com.server.server.model.PdfFile;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;
import java.util.UUID;

@Component
public class PdfFactory {
    public PdfFile build(byte[] bytes, String fileName) {
        return new PdfFile(UUID.randomUUID(), bytes, fileName, LocalDateTime.now());
    }
}
