package anicare.logic.controller;


import anicare.logic.dto.user.UserSignupDto;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@Slf4j
@RestController
@RequestMapping("/user", acces)
public class UserController {

    /*
    회원 가입 로직
     */

    @PostMapping("/signup")
    public ResponseEntity<?> signup(@RequestBody @Valid UserSignupDto userDto, BindingResult bindingResult){


       try {
           userDto.toEntity(userDto);
       }
       catch (Exception exception){
       }
       finally {
           if(bindingResult.hasErrors()){
               return
           }
       }
       return ResponseEntity<>();
   }
   


}
