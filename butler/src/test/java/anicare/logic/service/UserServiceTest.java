package anicare.logic.service;

import anicare.logic.dao.user.UserDao;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;


@SpringBootTest
class UserServiceTest {

    @Autowired
    UserService userService;

    @Test
    public Boolean 중복아이디체크(){

        //given
        UserDao userDao = new UserDao();
        userDao.setEmail("asdf@naver.com");


        //when
        Boolean aBoolean = userService.CheckEmail("asdf@naver.com");

        //then

        return aBoolean;
    }

}