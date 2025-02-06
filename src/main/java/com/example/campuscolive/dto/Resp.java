package com.example.campuscolive.dto;

import com.alibaba.fastjson.JSONObject;

public class Resp {
    public static String resp(RespResult result) {
        return JSONObject.toJSONString(result);
    }
}
