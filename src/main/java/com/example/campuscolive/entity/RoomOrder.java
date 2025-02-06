package com.example.campuscolive.entity;

import com.alibaba.fastjson.annotation.JSONField;
import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableField;
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
@TableName("room_order")
public class RoomOrder implements Serializable {

    private static final long serialVersionUID = -80953369372984856L;

    //Primary Key ID
    @TableId(type = IdType.AUTO)
    private Integer id;

    private Integer roomId;

    private Integer userId;

    private Integer ownerId;

    //Order Number
    private String orderNum;

    //Order Serial Number
    private String payOrder;

    private String title;

    private String subTitle;

    private Double payMoney;

    private String content;

    private String attachment;

    private String status;

    //Payment Time
    @JSONField(format = "yyyy-MM-dd HH:mm:ss")
    private Date payTime;

    //Creation Time
    @JSONField(format = "yyyy-MM-dd HH:mm:ss")
    private Date createTime;

    //Modification Time
    @JSONField(format = "yyyy-MM-dd HH:mm:ss")
    private Date updateTime;

    //Start Time
    @JSONField(format = "yyyy-MM-dd HH:mm:ss")
    private Date fromTime;

    //End Time
    @JSONField(format = "yyyy-MM-dd HH:mm:ss")
    private Date toTime;

    @TableField(exist = false)
    private Room room;
    @TableField(exist = false)
    private RoomDetail detail;
    @TableField(exist = false)
    private User owner;
    @TableField(exist = false)
    private User user;
}
