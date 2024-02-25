package com.server.server.unit.pdfService;

import com.server.server.exceptions.PdfBuildAndSaveException;
import com.server.server.model.PdfFile;
import com.server.server.repository.PdfRepository;
import com.server.server.service.pdfService.PdfFactory;
import com.server.server.service.pdfService.PdfServiceImpl;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;

import java.time.LocalDateTime;
import java.util.UUID;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.eq;
import static org.mockito.Mockito.*;


@SpringBootTest
public class PdfServiceTest {
    @Mock
    private PdfRepository pdfRepository;
    @Mock
    private PdfFactory pdfFactory;
    @InjectMocks
    private PdfServiceImpl pdfService;

    @Test
    public void testUploadPdf_shouldReturn_UUID() {
        // given
        UUID randomId = UUID.randomUUID();

        // when
        when(pdfFactory.build(any(byte[].class), eq("test.pdf")))
                .thenReturn(new PdfFile(randomId, new byte[]{}, "test.pdf", LocalDateTime.now()));

        when(pdfRepository.save(any(PdfFile.class))).thenAnswer(invocation -> {
            PdfFile pdfFile = invocation.getArgument(0);
            pdfFile.setId(randomId);
            return pdfFile;
        });

        byte[] pdfBytes = new byte[]{};
        String fileName = "test.pdf";
        UUID generatedId = pdfService.uploadPdf(pdfBytes, fileName);

        // then
        verify(pdfRepository, times(1)).save(any(PdfFile.class));
        assertEquals(generatedId, randomId);

    }

    @Test
    public void testUploadPdf_withInvalidData_shouldThrowException() {
        assertThrows(PdfBuildAndSaveException.class,
                () -> pdfService.uploadPdf(null, null));
    }

    @Test
    public void testUploadPdf_withEmptyByteArr_shouldThrowException() {
        assertThrows(PdfBuildAndSaveException.class,
                () -> pdfService.uploadPdf(new byte[]{}, "test.pdf"));
    }

    @Test
    public void testUploadPdf_withEmptyStringFileName_shouldThrowException() {
        assertThrows(PdfBuildAndSaveException.class,
                () -> pdfService.uploadPdf("Example pdf content".getBytes(), ""));
    }

}
