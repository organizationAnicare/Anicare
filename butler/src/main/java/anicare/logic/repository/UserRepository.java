package anicare.logic.repository;

import anicare.logic.dao.user.UserDao;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


import java.util.List;

@Repository
public interface UserRepository extends JpaRepository<UserDao, Long> {

    boolean findByEmail(String email);

    List<UserDao> findAll();
}
