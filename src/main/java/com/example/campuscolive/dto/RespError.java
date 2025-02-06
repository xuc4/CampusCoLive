package com.example.campuscolive.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class RespError extends RespResult {

    // Request address (returned in case of an exception)
    private String requestUrl;

    // Exception class (returned in case of an exception)
    private String exception;

}
