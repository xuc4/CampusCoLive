package com.example.campuscolive.entity;

import com.alibaba.fastjson.annotation.JSONField;
import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.util.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@TableName("room_detail")
public class RoomDetail implements Serializable {

    private static final long serialVersionUID = 707297687564965826L;

    //Primary Key ID
    @TableId(type = IdType.AUTO)
    private Integer id;

    private Integer roomId;

    private Integer bedroomCount;

    private Integer parlourCount;

    private Integer restroomCount;

    private Integer bathroomCount;

    private String capacity;

    private Integer garage;

    private String area;

    private String address;

    private String type;

    private String buildYear;

    private String status;

    private String elevator;

    private String kitchen;

    private String freeWifi;

    private String window;

    private String metro;

    private String rentType;

    //Creation Time
    @JSONField(format = "yyyy-MM-dd HH:mm:ss")
    private Date createTime;

    //Modification Time
    @JSONField(format = "yyyy-MM-dd HH:mm:ss")
    private Date updateTime;
}
