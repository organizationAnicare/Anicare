package anicare.logic.dao.user;

import anicare.logic.dao.BaseEntity;
import lombok.*;

import javax.persistence.*;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter @Setter
@Builder
public class UserDao extends BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(length = 6)
    private String name; // 본인 이름

    @Column(unique = true, length = 40) // 유니크 제약 조건 1.
    private  String email; // 아이디

    @Column(length = 16)
    private  String password; // 비밀번호

    private String animal;
}
