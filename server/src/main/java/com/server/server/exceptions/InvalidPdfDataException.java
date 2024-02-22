package com.server.server.exceptions;

public class InvalidPdfDataException extends RuntimeException {
    public InvalidPdfDataException(String message) {
        super(message);
    }

    public InvalidPdfDataException(String message, Throwable cause) {
        super(message, cause);
    }
}
