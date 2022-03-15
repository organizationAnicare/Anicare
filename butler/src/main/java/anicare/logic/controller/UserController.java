package anicare.logic.controller;


import anicare.logic.dto.user.UserSignupDto;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

@Slf4j
@RestController
@RequestMapping("/user")
public class UserController {

    /*
    회원 가입 로직
     */

 /*   @PostMapping("/signup")
    public ResponseEntity<?> signup(@RequestBody @Valid UserSignupDto userDto, BindingResult bindingResult){
    }*/
}
