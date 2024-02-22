package com.server.server.repository;

import com.server.server.model.PdfFile;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface PdfRepository extends JpaRepository<PdfFile, UUID> {
}
