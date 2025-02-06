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
@TableName("message")
public class Message implements Serializable {

    private static final long serialVersionUID = -13012886727763475L;

    //Primary Key ID
    @TableId(type = IdType.AUTO)
    private Integer id;

    private Integer roomId;

    private Integer orderId;

    //Message Sender ID
    private Integer sendId;

    //Message Recipient ID
    private Integer acceptId;

    private String title;

    private String content;

    private String status;

    //Processing Suggestions
    private String remark;

    //Creation Time
    @JSONField(format = "yyyy-MM-dd HH:mm:ss")
    private Date createTime;

    //Modification Time
    @JSONField(format = "yyyy-MM-dd HH:mm:ss")
    private Date updateTime;

    @TableField(exist = false)
    private RoomOrder roomOrder;

    @TableField(exist = false)
    private Room room;

    @TableField(exist = false)
    private User sender;

    @TableField(exist = false)
    private User accepter;
}
