package com.server.server.pdf.service;

import com.server.server.pdf.model.PdfFile;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;
import java.util.UUID;

@Component
public class PdfFactory {
    public PdfFile build(byte[] bytes, String fileName) {
        return new PdfFile(UUID.randomUUID(), bytes, fileName, LocalDateTime.now());
    }
}
