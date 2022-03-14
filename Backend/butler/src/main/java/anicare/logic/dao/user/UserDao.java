package anicare.logic.dao.user;

import lombok.*;

import javax.persistence.*;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter @Setter
@Builder
public class UserDao {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String name; // 본인 이름

    @Column(unique = true) // 유니크 제약 조건 1.
    private  String email; // 아이디

    private  String password; // 비밀번호

    private String animal;
}
