package anicare.logic.config.security.oauth.provider;

import anicare.logic.dao.user.UserDao;
import lombok.Builder;
import lombok.Getter;

import java.util.Map;

@Getter
public class OAuthAttributes {
    private String name;
    private String email;

    @Builder
    public OAuthAttributes(String name, String email) {
        this.name = name;
        this.email = email;
    }

    public static OAuthAttributes of(String provider,Map<String, Object> attributes)
    {
        //구글
        if(provider.equals("google")) return ofGoogle(attributes);
        //카카오
        return ofKakao(attributes);
    }

    private static OAuthAttributes ofKakao(Map<String, Object> attributes) {
        Map<String, Object> account = (Map<String, Object>) attributes.get("kakao_account");
        Map<String,Object> profile = (Map<String, Object>) account.get("profile");

        return OAuthAttributes.builder()
                .name((String)profile.get("nickname"))
                .email("kakao_".concat((String)account.get("email")))
                .build();
    }

    private static OAuthAttributes ofGoogle(Map<String, Object> attributes) {
        return OAuthAttributes.builder()
                .name((String)attributes.get("name"))
                .email("google_".concat((String)attributes.get("email")))
                .build();
    }
    public UserDao toEntity()
    {
        //일단 pwd,animal null로 추후 상의
        return UserDao.builder()
                .name(this.name)
                .email(this.email)
                .password(null)
                .animal(null)
                .build();
    }
}
