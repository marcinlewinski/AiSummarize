package com.server.server.pdf.service;

import com.server.server.exceptions.PdfBuildAndSaveException;
import com.server.server.pdf.repository.PdfRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
public class PdfServiceImpl implements PdfService {
    private final PdfRepository pdfRepository;
    private final PdfFactory pdfFactory;

    @Autowired
    public PdfServiceImpl(PdfRepository pdfRepository, PdfFactory pdfFactory) {
        this.pdfRepository = pdfRepository;
        this.pdfFactory = pdfFactory;
    }


    @Override
    public UUID uploadPdf(byte[] bytes, String fileName) {
        try {
            return pdfRepository.save(pdfFactory.build(bytes, fileName)).getId();

        } catch (PdfBuildAndSaveException error) {
            throw error;
        } catch (Exception e) {
            throw new PdfBuildAndSaveException("An error occurred during PDF building and saving.", e);
        }
    }
}
