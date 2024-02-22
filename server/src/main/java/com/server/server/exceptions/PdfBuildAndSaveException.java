package com.server.server.exceptions;

public class PdfBuildAndSaveException extends RuntimeException {
    public PdfBuildAndSaveException(String message) {
        super(message);
    }

    public PdfBuildAndSaveException(String message, Throwable cause) {
        super(message, cause);
    }
}
