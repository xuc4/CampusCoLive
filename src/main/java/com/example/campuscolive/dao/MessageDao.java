package com.example.campuscolive.dao;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.example.campuscolive.entity.Message;
import org.springframework.stereotype.Repository;

@Repository
public interface MessageDao extends BaseMapper<Message> {
}
