package com.server.server.service.pdfService;

import com.server.server.exceptions.PdfBuildAndSaveException;
import com.server.server.repository.PdfRepository;
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

        } catch (PdfBuildAndSaveException e) {
            throw new PdfBuildAndSaveException(e.getMessage());
        }
    }
}
