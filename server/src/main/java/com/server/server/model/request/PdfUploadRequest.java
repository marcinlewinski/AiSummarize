package com.server.server.model.request;

import lombok.AllArgsConstructor;
import lombok.Getter;
import org.springframework.web.multipart.MultipartFile;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
@AllArgsConstructor
@Getter
public class PdfUploadRequest {
    @NotNull
    @NotEmpty
    private String fileName;
    @Size(max = 10 * 1024 * 1024, message = "File size must be less than 10 MB")
    private MultipartFile pdfFile;
}
