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
@TableName("comment")
public class Comment implements Serializable {
    private static final long serialVersionUID = 112068042235866994L;

    //Primary Key ID
    @TableId(type = IdType.AUTO)
    private Integer id;

    //Reply Comment ID
    private Integer replyId;

    private Integer roomId;

    private Integer userId;

    private String content;

    //Rating
    private Integer rateCount;

    //Creation Time
    @JSONField(format = "yyyy-MM-dd HH:mm:ss")
    private Date createTime;

    //Modification Time
    @JSONField(format = "yyyy-MM-dd HH:mm:ss")
    private Date updateTime;

    @TableField(exist = false)
    private User user;
}
