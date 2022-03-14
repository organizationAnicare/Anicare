package anicare.logic.service;

import anicare.logic.dto.user.UserSignupDto;
import anicare.logic.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class UserService {

    @Autowired
    public UserRepository userRepository;

    /*
    중복이메일 확인
     */

    @Transactional
    public Boolean CheckEmail(String email){
       if(userRepository.findByEmail(email)){
           return false;
       }
       return true;
    }
}
