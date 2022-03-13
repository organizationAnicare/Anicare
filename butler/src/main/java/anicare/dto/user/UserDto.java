package anicare.dto.user;

import javax.validation.constraints.Email;
import javax.validation.constraints.Max;
import javax.validation.constraints.NotBlank;

public class UserDto {

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
}
