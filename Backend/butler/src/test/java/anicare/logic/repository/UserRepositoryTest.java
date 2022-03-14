package anicare.logic.repository;

import anicare.butler.ButlerApplication;
import anicare.logic.dao.user.UserDao;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;



@SpringBootTest(classes = ButlerApplication.class)
@Transactional
class UserRepositoryTest {

    @Autowired
    UserRepository userRepository;



      //  @Rollback()
        @Test
        public void save() {



            //given
            UserDao userDao = new UserDao();
            userDao.setEmail("daffodil8620@naver.com");
            userDao.setAnimal("사자");
            userDao.setName("이준엽");
            userDao.setPassword("aaaaaa");



            //when

            UserDao save1 = userRepository.save(userDao);

            //then
            UserDao result = userRepository.findById(save1.getId()).get();
            org.assertj.core.api.Assertions.assertThat(userDao).isEqualTo(result);






    }
}