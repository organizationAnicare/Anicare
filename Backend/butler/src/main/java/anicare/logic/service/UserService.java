package anicare.logic.service;

import anicare.logic.dao.user.UserDao;
import anicare.logic.dto.user.UserSignupDto;
import anicare.logic.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
public class UserService {

    @Autowired
    public UserRepository userRepository;

    /*
    중복이메일 확인
     */

    @Transactional
    public Boolean CheckEmail(String email){
        //멤버가 존재하면 true return
        return userRepository.findByEmail(email) != null;
    }
}
