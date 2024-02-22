package com.server.server.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.UUID;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
@Table(name = "pdf_files")
public class PdfFile {
    @Id
    private UUID id;
    @Lob
    private byte[] content;
    private String fileName;
    private LocalDateTime uploadDate;


}
