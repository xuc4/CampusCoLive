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
@TableName("room")
public class Room implements Serializable {

    private static final long serialVersionUID = -49534036834714000L;

    //Primary Key ID
    @TableId(type = IdType.AUTO)
    private Integer id;

    private Integer ownerId;

    private String title;

    private String subTitle;

    //Rent Price for Month
    private Double monthPrice;

    private String location;

    private String info;

    private String content;

    //Cover Image
    private String img;

    private String images;

    //Creation Time
    @JSONField(format = "yyyy-MM-dd HH:mm:ss")
    private Date createTime;

    //Modification Time
    @JSONField(format = "yyyy-MM-dd HH:mm:ss")
    private Date updateTime;

    //Page Views
    private Integer lookCount;

    @TableField(exist = false)
    private RoomDetail detail;

    @TableField(exist = false)
    private Integer favorId;

    @TableField(exist = false)
    private User user;
}
