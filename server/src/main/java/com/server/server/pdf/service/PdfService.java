package com.server.server.pdf.service;

import java.util.UUID;

public interface PdfService {

    UUID uploadPdf(byte[] bytes, String fileName);
}
