package anicare.logic.dto.user;

import anicare.logic.dao.user.UserDao;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.Email;
import javax.validation.constraints.Max;
import javax.validation.constraints.NotBlank;

@Getter @Setter
public class UserSignupDto {

    @NotBlank
    @Max(6)
    private String name; // 본인 이름

    @Email
    @Max(40)
    private  String email; // 아이디

    @NotBlank
    @Max(16)
    private  String password; // 비밀번호

    private String animal;


    public UserDao toEntity(UserSignupDto userDto){
        return UserDao.builder()
                .email(userDto.email)
                .password(userDto.password)
                .name(userDto.name)
                .animal(userDto.animal)
                .build();
    }
}
