package com.server.server.model;

import jakarta.persistence.*;
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
    @Column(length = 10485760)
    private byte[] content;
    private String fileName;
    private LocalDateTime uploadDate;


}
