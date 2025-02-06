package com.example.campuscolive.dto;

import com.alibaba.fastjson.JSONObject;
import com.example.campuscolive.utils.Assert;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.util.List;

// Response result
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class RespResult {

    protected String code;

    protected String message;

    protected Object data;

    // Request successful
    public static RespResult success() {
        return RespResult.builder()
                .code("SUCCESS")
                .message("Request successful")
                .build();
    }

    public static RespResult success(String message) {
        return RespResult.builder()
                .code("SUCCESS")
                .message(message)
                .build();
    }

    public static RespResult success(String message, Object data) {
        return RespResult.builder()
                .code("SUCCESS")
                .message(message)
                .data(data)
                .build();
    }

    // Request failed
    public static RespResult fail() {
        return RespResult.builder()
                .code("FAIL")
                .message("Request failed")
                .build();
    }

    public static RespResult fail(String message) {
        return RespResult.builder()
                .code("FAIL")
                .message(message)
                .build();
    }

    // No data found
    public static RespResult notFound(String message, Object data) {
        return RespResult.builder()
                .code("NOT_FOUND")
                .message(message)
                .data(data)
                .build();
    }

    public static RespResult notFound() {
        return RespResult.builder()
                .code("NOT_FOUND")
                .message("Request failed")
                .build();
    }

    public static RespResult notFound(String message) {
        return RespResult.builder()
                .code("NOT_FOUND")
                .message(message)
                .build();
    }

    public static RespResult fail(String message, Object data) {
        return RespResult.builder()
                .code("FAIL")
                .message(message)
                .data(data)
                .build();
    }

    // Whether the request was successful
    public boolean isSuccess() {
        return "SUCCESS".equals(code);
    }

    // Whether the request was successful and returned data
    public boolean isSuccessWithDateResp() {
        return "SUCCESS".equals(code) && Assert.notEmpty(data);
    }

    public boolean notSuccess() {
        return !isSuccess();
    }

    public <T> List<T> getDataList(Class<T> clazz) {
        String jsonString = JSONObject.toJSONString(data);
        return JSONObject.parseArray(jsonString, clazz);
    }

    public <T> T getDataObj(Class<T> clazz) {
        String jsonString = JSONObject.toJSONString(data);
        return JSONObject.parseObject(jsonString, clazz);
    }

}
