package anicare.logic.repository;

import anicare.logic.dao.user.UserDao;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<UserDao, Long> {

    UserDao findByEmail(String email);

    List<UserDao> findAll();
}
