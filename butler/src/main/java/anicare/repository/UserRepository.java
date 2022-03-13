package anicare.repository;

import anicare.dao.user.UserDao;
import org.springframework.data.jpa.repository.JpaRepository;



import java.util.List;


public interface UserRepository extends JpaRepository<UserDao, Long> {

    List<UserDao> findAll();
}
