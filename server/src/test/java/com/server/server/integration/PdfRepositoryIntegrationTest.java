package com.server.server.integration;

import com.server.server.model.PdfFile;
import com.server.server.repository.PdfRepository;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import java.time.LocalDateTime;
import java.util.Optional;
import java.util.UUID;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

@ExtendWith(SpringExtension.class)
@DataJpaTest
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)

public class PdfRepositoryIntegrationTest {
    @Autowired
    private PdfRepository pdfRepository;

    @Test
    public void testSavePdfFile() {
        //given
        byte[] pdfBytes = "Some PDF content".getBytes();
        String fileName = "test.pdf";
        LocalDateTime time = LocalDateTime.now();
        UUID id = UUID.randomUUID();

        //when
        PdfFile savedPdfFile = pdfRepository.save(new PdfFile(id, pdfBytes, fileName, time));
        Optional<PdfFile> retrievedPdfFile = pdfRepository.findById(id);

        //then
        assertTrue(retrievedPdfFile.isPresent());
        assertEquals(retrievedPdfFile.get().getId(), savedPdfFile.getId());
        assertEquals(savedPdfFile.getFileName(), retrievedPdfFile.get().getFileName());
        assertEquals(savedPdfFile.getContent(), retrievedPdfFile.get().getContent());
        assertEquals(savedPdfFile.getUploadDate(), retrievedPdfFile.get().getUploadDate());
    }

}
