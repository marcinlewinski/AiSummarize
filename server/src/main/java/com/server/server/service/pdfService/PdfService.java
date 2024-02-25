package com.server.server.service.pdfService;

import java.util.UUID;

public interface PdfService {

    UUID uploadPdf(byte[] bytes, String fileName);
}
